# Folder Structure Generator

Generate a clean project tree and keep your `README.md` in sync with the current folder structure.

## Status

This repository is currently in the planning and documentation stage. The implementation has not been added yet.

## Goal

The project is intended to:

- scan a project directory
- generate a readable folder tree
- insert or update that tree inside `README.md`
- support reusable templates for common project layouts

## Planned Features

- automatic project tree generation
- `README.md` section updates
- customizable folder and file templates
- nested directory support
- ignore rules for generated or irrelevant paths
- CLI usage for local projects

## Example Output

```text
my-project/
├── src/
├── assets/
├── tests/
└── README.md
```

## Planned Workflow

1. Read the target project structure.
2. Convert it into a tree format.
3. Find a dedicated section in `README.md`.
4. Replace that section with the latest generated structure.

## Suggested README Section

````markdown
## Project Structure

```text
my-project/
├── src/
├── assets/
├── tests/
└── README.md
```
````

## Roadmap

- [ ] Add initial Node.js implementation
- [ ] Add CLI entry point
- [ ] Support nested folders
- [ ] Support ignore patterns
- [ ] Support template presets
- [ ] Add tests

## Contributing

Issues and pull requests are welcome. If you want to help shape the first implementation, open an issue with the workflow or CLI behavior you want supported.

## License

MIT
