# Folder Structure Generator

`Folder Structure Generator` is a VS Code extension that scans the current workspace, generates a clean tree view, and inserts that structure into `README.md`.

GitHub: https://github.com/TigerDev-Studio

Visual Studio Marketplace Publisher: https://marketplace.visualstudio.com/manage/publishers/tigerdev1991

## Features

- generate a folder tree from the current workspace
- update or create a `## Project Structure` section in `README.md`
- copy the generated structure to the clipboard
- configure maximum depth, file inclusion, section title, and excluded paths

## Commands

Open the Command Palette and run:

- `Folder Structure Generator: Update README Structure`
- `Folder Structure Generator: Copy Folder Structure`

## Example Output

```text
my-project/
├── src/
│   ├── commands/
│   └── utils/
├── README.md
└── package.json
```

## How It Works

When you run `Update README Structure`, the extension:

1. reads the current workspace root
2. builds a tree representation of folders and files
3. finds the configured README section
4. replaces that section, or appends it if it does not exist

## Extension Settings

This extension contributes the following settings:

- `folderStructureGenerator.sectionTitle`: heading to update inside `README.md`
- `folderStructureGenerator.maxDepth`: maximum directory depth to include
- `folderStructureGenerator.includeFiles`: include files in addition to folders
- `folderStructureGenerator.exclude`: names to exclude from generation

Default exclusions:

```json
[
  ".git",
  "node_modules",
  ".DS_Store",
  ".vscode-test",
  "dist",
  "out"
]
```

## Development

```bash
npm install
```

Then open this repository in VS Code and press `F5` to launch the extension development host.

To package the extension:

```bash
npm run package
```

## Publishing Metadata

- Publisher: `tigerdev1991`
- GitHub repository: `https://github.com/TigerDev-Studio/Folder-Structure-Generator`
- Marketplace publisher page: `https://marketplace.visualstudio.com/manage/publishers/tigerdev1991`

## Project Structure

```text
Folder-Structure-Generator/
├── CHANGELOG.md
├── extension.js
├── package.json
├── README.md
└── .vscodeignore
```

## License

MIT
