# Magento E-commerce Test Automation

This project contains automated tests for the Magento e-commerce website (https://magento.softwaretestingboard.com) using Cypress with BDD and Page Object Model.

## 🚀 Features

- BDD (Behavior-Driven Development) using Cucumber
- Page Object Model for better maintainability
- Automated test execution with screenshots and videos
- CI/CD integration ready

## 📋 Test Scenarios

### Signup Flow
- Successful registration with valid credentials
- Registration with existing email
- Registration with invalid password
- Registration with missing required fields

### Login Flow
- Successful login with valid credentials
- Login with invalid credentials

### Smoke Tests
- Basic website functionality verification

## 🛠️ Setup Instructions

1. **Prerequisites**
   - Node.js (v14 or higher)
   - npm (v6 or higher)

2. **Installation**
   ```bash
   npm install
   ```

3. **Configuration**
   - Update `cypress.env.json` with your test credentials
   - Configure base URL in `cypress.config.js`

4. **Running Tests**
   ```bash
   # Run all tests
   npx cypress run

   # Run specific feature
   npx cypress run --spec "cypress/e2e/features/signup/signup.feature"
   ```

## 📁 Project Structure

```
├── cypress/
│   ├── e2e/
│   │   ├── features/        # BDD feature files
│   │   └── pageObjects/     # Page Object Model
│   ├── support/
│   │   └── step_definitions/ # Step definitions
│   ├── screenshots/         # Test execution screenshots
│   └── videos/             # Test execution videos
├── TestCases.xlsx          # Test case documentation
└── README.md              # Project documentation
```

## 🔄 CI/CD Integration

The project is configured for CI/CD using GitHub Actions. The workflow:
1. Runs on push to main branch
2. Installs dependencies
3. Executes all tests
4. Uploads test results and artifacts

## 📊 Test Reports

- Screenshots are generated for each test execution
- Videos are recorded for failed tests
- Test results are available in the CI/CD pipeline

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.
