# Contributing to Magento E-commerce Test Automation

Thank you for your interest in contributing to our test automation project! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/incubyte-assignment.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Guidelines

### Code Style
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### BDD Guidelines
- Write clear, concise feature files
- Use Given-When-Then format
- Keep scenarios independent
- Use descriptive scenario names

### Page Object Model
- Keep page objects focused on single pages
- Use meaningful element selectors
- Implement proper error handling
- Add validation methods

## 🧪 Testing

1. Run tests locally:
   ```bash
   npx cypress run
   ```

2. Run specific feature:
   ```bash
   npx cypress run --spec "cypress/e2e/features/your-feature.feature"
   ```

3. Run in interactive mode:
   ```bash
   npx cypress open
   ```

## 📦 Pull Request Process

1. Update documentation
2. Add tests for new features
3. Ensure all tests pass
4. Update the changelog
5. Create a pull request

## 📚 Documentation

- Update README.md for major changes
- Document new features
- Update test cases in TestCases.xlsx
- Add comments for complex code

## 🔍 Code Review

- All PRs require at least one review
- Address review comments
- Keep PRs focused and small
- Update PR based on feedback

## 🐛 Bug Reports

1. Use the issue tracker
2. Include steps to reproduce
3. Add screenshots if relevant
4. Specify environment details

## 📈 Feature Requests

1. Use the issue tracker
2. Describe the feature
3. Explain the use case
4. Suggest implementation

## 🤝 Questions and Support

- Create an issue for questions
- Tag issues appropriately
- Provide context and details
- Be patient and respectful

## 📜 License

By contributing, you agree that your contributions will be licensed under the project's MIT License. 