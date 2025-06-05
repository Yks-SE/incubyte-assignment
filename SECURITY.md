# Security Policy

## Supported Versions

We currently support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our test automation framework seriously. If you believe you have found a security vulnerability, please follow these steps:

1. **Do Not** disclose the vulnerability publicly
2. Email us at [your-email@example.com] with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes

## What to Expect

- We will acknowledge your report within 48 hours
- We will investigate and keep you updated on our progress
- We will credit you in our security advisory if you wish

## Security Measures

Our framework implements several security measures:

1. **Environment Variables**
   - Sensitive data is stored in `cypress.env.json`
   - This file is git-ignored
   - Example template provided in `cypress.env.example.json`

2. **Dependencies**
   - Regular security audits
   - Automated vulnerability scanning
   - Locked dependency versions

3. **Test Data**
   - No real credentials in tests
   - Test data is isolated
   - Cleanup after test execution

## Best Practices

1. Never commit sensitive data
2. Use environment variables for credentials
3. Keep dependencies updated
4. Follow security guidelines in CONTRIBUTING.md

## Updates

Security updates will be released as patch versions (e.g., 1.0.1, 1.0.2) and will be documented in CHANGELOG.md. 