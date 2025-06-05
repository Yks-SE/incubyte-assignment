# Test Cases for Magento Signup and Login Flow

## Test Case 1: Successful User Signup
| Test ID | TC-001 |
|---------|--------|
| Test Case Name | Successful User Signup with Valid Credentials |
| Description | Verify that a new user can successfully create an account with valid credentials |
| Preconditions | User is on the Magento website homepage |
| Steps | 1. Click on "Create an Account" link<br>2. Fill in all required fields with valid data<br>3. Click "Create an Account" button |
| Expected Result | User account is created successfully and user is redirected to account dashboard |
| Actual Result | User account is created successfully |
| Status | Pass |

## Test Case 2: Successful User Login
| Test ID | TC-002 |
|---------|--------|
| Test Case Name | Successful User Login with Valid Credentials |
| Description | Verify that a registered user can successfully log in with valid credentials |
| Preconditions | User has a registered account |
| Steps | 1. Click on "Sign In" link<br>2. Enter valid email and password<br>3. Click "Sign In" button |
| Expected Result | User is successfully logged in and redirected to account dashboard |
| Actual Result | User is successfully logged in |
| Status | Pass |

## Test Case 3: Signup Form Validation
| Test ID | TC-003 |
|---------|--------|
| Test Case Name | Signup Form Field Validation |
| Description | Verify that the signup form validates all required fields |
| Preconditions | User is on the signup page |
| Steps | 1. Leave required fields empty<br>2. Click "Create an Account" button |
| Expected Result | Form displays appropriate validation messages for empty fields |
| Actual Result | Form displays validation messages |
| Status | Pass |

## Test Case 4: Login Form Validation
| Test ID | TC-004 |
|---------|--------|
| Test Case Name | Login Form Field Validation |
| Description | Verify that the login form validates all required fields |
| Preconditions | User is on the login page |
| Steps | 1. Leave email and password fields empty<br>2. Click "Sign In" button |
| Expected Result | Form displays appropriate validation messages for empty fields |
| Actual Result | Form displays validation messages |
| Status | Pass |

## Test Case 5: Password Strength Validation
| Test ID | TC-005 |
|---------|--------|
| Test Case Name | Password Strength Requirements |
| Description | Verify that the signup form enforces password strength requirements |
| Preconditions | User is on the signup page |
| Steps | 1. Enter a weak password (less than 8 characters)<br>2. Fill other required fields<br>3. Click "Create an Account" button |
| Expected Result | Form displays password strength requirement message |
| Actual Result | Form displays password strength message |
| Status | Pass |

## Test Case 6: Email Format Validation
| Test ID | TC-006 |
|---------|--------|
| Test Case Name | Email Format Validation |
| Description | Verify that the signup form validates email format |
| Preconditions | User is on the signup page |
| Steps | 1. Enter invalid email format<br>2. Fill other required fields<br>3. Click "Create an Account" button |
| Expected Result | Form displays email format validation message |
| Actual Result | Form displays email validation message |
| Status | Pass |

## Test Case 7: Duplicate Email Validation
| Test ID | TC-007 |
|---------|--------|
| Test Case Name | Duplicate Email Check |
| Description | Verify that the system prevents signup with an existing email |
| Preconditions | User is on the signup page |
| Steps | 1. Enter an email that already exists in the system<br>2. Fill other required fields<br>3. Click "Create an Account" button |
| Expected Result | System displays message indicating email already exists |
| Actual Result | System displays duplicate email message |
| Status | Pass |

## Test Case 8: Login with Invalid Credentials
| Test ID | TC-008 |
|---------|--------|
| Test Case Name | Login with Invalid Credentials |
| Description | Verify that the system handles invalid login attempts appropriately |
| Preconditions | User is on the login page |
| Steps | 1. Enter invalid email and password<br>2. Click "Sign In" button |
| Expected Result | System displays appropriate error message |
| Actual Result | System displays invalid credentials message |
| Status | Pass | 