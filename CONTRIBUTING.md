# Contributing to Beunec Agentic Annotation Protocol (AAP)

First off, thank you for considering contributing to the Beunec Agentic Annotation Protocol (AAP). It's people like you who make the open-source community such an amazing place to learn, inspire, and create.

We welcome contributions from researchers, AI engineers, agent builders, framework maintainers, and enterprise architects to experiment with, critique, benchmark, improve, and extend the protocol.

## How Can I Contribute?

### 1. Reporting Bugs & Issues
If you find a bug or experience an issue while using AAP, please open an issue in the repository. Provide as much detail as possible, including:
- Steps to reproduce the behavior.
- Expected vs. actual behavior.
- Your environment (Node version, OS, LLM used, etc.).

### 2. Suggesting Enhancements & New Annotations
If you have an idea for a new agentic annotation (e.g., a new domain like Medical, Engineering, etc.) or an improvement to the existing core annotations:
- Open an issue outlining your proposal.
- Explain the rationale and how it helps mitigate system prompt bloat or capability ambiguity.
- If it aligns with the project's design philosophy, we will encourage you to submit a Pull Request.

### 3. Submitting Pull Requests
1. **Fork** the repository and create a new branch from `main` (e.g., `feature/add-new-annotation`).
2. **Develop** your changes. If adding a new annotation skill, ensure you:
   - Add the Markdown content to both `/LLM SYSTEM INSTRUCTIONS/` and `/AGENTIC AWARENESS INPUT PROMPT/`.
   - Update the `/aap/` CLI mappings so the new skill can be executed via `npx` (e.g., `aap/new-skill/index.js`).
   - Update `package.json` with the new CLI binary.
3. **Commit** your changes with clear, descriptive commit messages.
4. **Push** your branch to your fork.
5. **Open a Pull Request** against the `main` branch. Provide a detailed description of the changes and any relevant context.

## Local CLI Development & Testing
To test the CLI modifications locally before submitting a PR:
1. Clone your fork.
2. Run `npm link` in the root directory.
3. Test your commands locally using `beunec-agentic-annotation-protocol aap-<your-skill>`.

## Code of Conduct
By participating in this project, you agree to abide by a standard code of conduct. Please treat all contributors with respect, maintain professional technical discourse, and foster an inclusive, welcoming environment.

## License
By contributing to AAP, you agree that your contributions will be licensed under the MIT License of this repository.

*Engineered by Beunec Technologies, Inc. R&D Team.*
