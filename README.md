# Folder Structure Generators

`Folder Structure Generators` is a VS Code extension that creates a readable folder tree for your workspace and adds it to your `README.md`.

## What It Does

- generates a clean project structure tree
- updates or creates a `Project Structure` section in `README.md`
- copies the generated tree to the clipboard
- lets you control depth, files, section title, and excluded paths

## Install

Install from the Visual Studio Marketplace:

https://marketplace.visualstudio.com/items?itemName=TigerDev1991.folder-structure-generator-tigerdev1991

You can also install the packaged `.vsix` file directly in VS Code:

1. Open Extensions in VS Code.
2. Select the `...` menu in the top-right corner.
3. Choose `Install from VSIX...`
4. Select `folder-structure-generator-tigerdev1991-0.1.0.vsix`

## How To Use

1. Open your project folder in VS Code.
2. Open the Command Palette:
   macOS: `Shift` + `Cmd` + `P`
   Windows/Linux: `Shift` + `Ctrl` + `P`
3. Run one of these commands:
   `Folder Structure Generator: Update README Structure`
   `Folder Structure Generator: Copy Folder Structure`

## Commands

- `Folder Structure Generator: Update README Structure`
  Generates the workspace tree and inserts it into `README.md`.
- `Folder Structure Generator: Copy Folder Structure`
  Generates the workspace tree and copies it to your clipboard.

## Example Output

```text
my-project/
├── src/
│   ├── commands/
│   └── utils/
├── README.md
└── package.json
```

## README Output

When you run `Update README Structure`, the extension adds or updates a section like this:

````markdown
## Project Structure

```text
my-project/
├── src/
│   ├── commands/
│   └── utils/
├── README.md
└── package.json
```
````

## Settings

You can configure these settings in VS Code:

- `folderStructureGenerator.sectionTitle`
  The heading used in `README.md`. Default: `Project Structure`
- `folderStructureGenerator.maxDepth`
  Maximum folder depth to include. Default: `3`
- `folderStructureGenerator.includeFiles`
  Include files in the generated output. Default: `true`
- `folderStructureGenerator.exclude`
  Files and folders to ignore

Default excluded names:

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

## Requirements

- VS Code `1.85.0` or later
- A workspace folder with a `README.md` file if you want to update documentation automatically

## Support

- GitHub: https://github.com/TigerDev-Studio
- Repository: https://github.com/TigerDev-Studio/Folder-Structure-Generator
- Issues: https://github.com/TigerDev-Studio/Folder-Structure-Generator/issues

## License

MIT
