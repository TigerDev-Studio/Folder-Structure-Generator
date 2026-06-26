const fs = require("fs");
const path = require("path");
const vscode = require("vscode");

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "folderStructureGenerator.updateReadmeStructure",
      updateReadmeStructure
    ),
    vscode.commands.registerCommand(
      "folderStructureGenerator.copyFolderStructure",
      copyFolderStructure
    )
  );
}

async function updateReadmeStructure() {
  const workspacePath = getWorkspaceRoot();
  if (!workspacePath) {
    return;
  }

  const readmePath = path.join(workspacePath, "README.md");
  if (!fs.existsSync(readmePath)) {
    vscode.window.showErrorMessage("README.md was not found in the workspace root.");
    return;
  }

  try {
    const tree = buildTreeText(workspacePath);
    const nextReadme = upsertReadmeSection(readmePath, tree);
    fs.writeFileSync(readmePath, nextReadme, "utf8");
    vscode.window.showInformationMessage("README.md project structure updated.");
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to update README.md: ${error.message}`);
  }
}

async function copyFolderStructure() {
  const workspacePath = getWorkspaceRoot();
  if (!workspacePath) {
    return;
  }

  try {
    const tree = buildTreeText(workspacePath);
    await vscode.env.clipboard.writeText(tree);
    vscode.window.showInformationMessage("Folder structure copied to clipboard.");
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to copy folder structure: ${error.message}`);
  }
}

function getWorkspaceRoot() {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders || folders.length === 0) {
    vscode.window.showErrorMessage("Open a workspace folder before running Folder Structure Generator.");
    return null;
  }

  return folders[0].uri.fsPath;
}

function buildTreeText(workspacePath) {
  const config = vscode.workspace.getConfiguration("folderStructureGenerator");
  const maxDepth = config.get("maxDepth", 3);
  const includeFiles = config.get("includeFiles", true);
  const excludedNames = new Set(config.get("exclude", []));
  const rootName = `${path.basename(workspacePath)}/`;
  const lines = [rootName];

  appendEntries({
    currentPath: workspacePath,
    prefix: "",
    depth: 0,
    maxDepth,
    includeFiles,
    excludedNames,
    lines
  });

  return lines.join("\n");
}

function appendEntries(options) {
  const {
    currentPath,
    prefix,
    depth,
    maxDepth,
    includeFiles,
    excludedNames,
    lines
  } = options;

  if (depth >= maxDepth) {
    return;
  }

  const entries = fs
    .readdirSync(currentPath, { withFileTypes: true })
    .filter((entry) => !excludedNames.has(entry.name))
    .filter((entry) => includeFiles || entry.isDirectory())
    .sort(sortEntries);

  entries.forEach((entry, index) => {
    const isLast = index === entries.length - 1;
    const branch = isLast ? "└── " : "├── ";
    const childPrefix = isLast ? "    " : "│   ";
    const suffix = entry.isDirectory() ? "/" : "";
    lines.push(`${prefix}${branch}${entry.name}${suffix}`);

    if (entry.isDirectory()) {
      appendEntries({
        currentPath: path.join(currentPath, entry.name),
        prefix: `${prefix}${childPrefix}`,
        depth: depth + 1,
        maxDepth,
        includeFiles,
        excludedNames,
        lines
      });
    }
  });
}

function sortEntries(a, b) {
  if (a.isDirectory() && !b.isDirectory()) {
    return -1;
  }

  if (!a.isDirectory() && b.isDirectory()) {
    return 1;
  }

  return a.name.localeCompare(b.name);
}

function upsertReadmeSection(readmePath, tree) {
  const readmeContent = fs.readFileSync(readmePath, "utf8");
  const config = vscode.workspace.getConfiguration("folderStructureGenerator");
  const sectionTitle = config.get("sectionTitle", "Project Structure");
  const heading = `## ${sectionTitle}`;
  const sectionBody = `${heading}\n\n\`\`\`text\n${tree}\n\`\`\``;
  const escapedHeading = escapeRegExp(heading);
  const pattern = new RegExp(`(^|\\n)${escapedHeading}\\n[\\s\\S]*?(?=\\n## |$)`, "m");

  if (pattern.test(readmeContent)) {
    return readmeContent.replace(pattern, `$1${sectionBody}\n`);
  }

  const trimmed = readmeContent.trimEnd();
  return `${trimmed}\n\n${sectionBody}\n`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
