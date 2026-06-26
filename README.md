# 📦 Folder Structure Generator

A simple tool that generates a clean folder structure for your projects and automatically inserts the generated tree into the `README.md`.

## ✨ Features

* 📁 Generate project folder structures
* 📝 Automatically update `README.md`
* ⚡ Fast and lightweight
* 🎯 Customizable folder templates
* 💻 Cross-platform support

## Example Output

```text
📦 Project
├── src
├── assets
├── test
└── README.md
```

## Project Structure

```text
Project/
├── src/
├── assets/
├── test/
├── README.md
└── package.json
```

## Installation

```bash
git clone https://github.com/your-username/folder-structure-generator.git

cd folder-structure-generator

npm install
```

## Usage

```bash
npm start
```

or

```bash
node index.js
```

The tool will generate the folder tree and automatically update the `README.md` with the latest project structure.

## Configuration

Customize the folders by editing the configuration file:

```json
{
  "folders": [
    "src",
    "assets",
    "test"
  ]
}
```

## Example Generated README Section

````markdown
## Project Structure

```text
📦 Project
├── src
├── assets
├── test
└── README.md
````

```

## Technologies Used

- Node.js
- JavaScript
- File System (fs)

## Roadmap

- [ ] Nested folder support
- [ ] Ignore files/folders
- [ ] Multiple templates
- [ ] CLI support
- [ ] VS Code Extension

## Contributing

Pull requests are welcome. Feel free to open an issue for suggestions or bug reports.

## License

MIT License
```
