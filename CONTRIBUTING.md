# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/javascript-learning/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment details (OS, Node version, browser)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **ES6+ JavaScript** features
- **Webpack** for module bundling
- **Babel** for transpilation
- **MVC architecture** in the Forkify project (folder 11)

Before submitting:
```bash
# Navigate to the project folder (e.g., folder 11 for Forkify)
cd 11

# Install dependencies
npm install

# Build the project
npm run build

# Start development server
npm start
```

### Coding Standards

1. **ES6+ Features**: Use modern JavaScript (arrow functions, classes, async/await, etc.)
2. **Module Pattern**: Follow the established patterns in each exercise
3. **Clear Naming**: Use descriptive variable and function names
4. **Comments**: Add comments to explain complex logic or learning points
5. **MVC Architecture**: For the Forkify project, maintain separation of concerns (Model, View, Controller)

### Adding New Exercises

When adding new course exercises:
1. Create a new numbered folder (e.g., `12/`)
2. Include necessary HTML, CSS, and JavaScript files
3. Add a README or comments explaining the exercise topic
4. Update the main README.md to reference the new exercise

### Project Structure

Each numbered folder represents a different course section:
- `02/` - JavaScript fundamentals
- `03/` - Advanced concepts (hoisting, scope, etc.)
- `04/` - Pig Game project
- `05/` - Advanced JavaScript features
- `06/` - Budget app (Budgety project)
- `07/` - ES6 features
- `10/` - Asynchronous JavaScript
- `11/` - Forkify project (complete recipe application)

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
