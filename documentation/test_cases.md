# Test Cases Documentation

## Sign Up Flow Test Cases

### TC001: Successful User Registration
**Description**: Verify that a new user can successfully create an account with valid information
**Preconditions**: User is on the registration page
**Test Steps**:
1. Navigate to the registration page
2. Fill in all required fields with valid data:
   - First Name
   - Last Name
   - Email
   - Password
   - Confirm Password
3. Click "Create an Account" button
**Expected Results**: 
- Account is created successfully
- User is redirected to the account dashboard
- Success message is displayed
**Status**: Pass
**Comments**: Tested with valid email format and strong password

### TC002: Registration with Existing Email
**Description**: Verify that system prevents registration with an already registered email
**Preconditions**: User is on the registration page
**Test Steps**:
1. Navigate to the registration page
2. Fill in all required fields with an existing email
3. Click "Create an Account" button
**Expected Results**: 
- Error message is displayed
- Account is not created
- User remains on registration page
**Status**: Pass
**Comments**: System correctly identifies duplicate email addresses

### TC003: Registration with Invalid Email Format
**Description**: Verify that system validates email format during registration
**Preconditions**: User is on the registration page
**Test Steps**:
1. Navigate to the registration page
2. Enter invalid email format
3. Fill other required fields
4. Click "Create an Account" button
**Expected Results**: 
- Error message about invalid email format is displayed
- Account is not created
**Status**: Pass
**Comments**: System validates email format before submission

### TC004: Registration with Password Mismatch
**Description**: Verify that system validates password confirmation
**Preconditions**: User is on the registration page
**Test Steps**:
1. Navigate to the registration page
2. Fill in all required fields
3. Enter different passwords in password and confirm password fields
4. Click "Create an Account" button
**Expected Results**: 
- Error message about password mismatch is displayed
- Account is not created
**Status**: Pass
**Comments**: System ensures password confirmation matches

### TC005: Registration with Required Fields Validation
**Description**: Verify that system validates all required fields
**Preconditions**: User is on the registration page
**Test Steps**:
1. Navigate to the registration page
2. Leave one or more required fields empty
3. Click "Create an Account" button
**Expected Results**: 
- Error messages for empty required fields are displayed
- Account is not created
**Status**: Pass
**Comments**: System properly validates all mandatory fields

## Login Flow Test Cases

### TC006: Successful Login
**Description**: Verify that registered user can successfully log in
**Preconditions**: User has a valid account
**Test Steps**:
1. Navigate to the login page
2. Enter valid email and password
3. Click "Sign In" button
**Expected Results**: 
- User is successfully logged in
- User is redirected to the account dashboard
**Status**: Pass
**Comments**: Tested with valid credentials

### TC007: Login with Invalid Credentials
**Description**: Verify that system prevents login with invalid credentials
**Preconditions**: User is on the login page
**Test Steps**:
1. Navigate to the login page
2. Enter invalid email and/or password
3. Click "Sign In" button
**Expected Results**: 
- Error message about invalid credentials is displayed
- User remains on login page
**Status**: Pass
**Comments**: System properly handles invalid login attempts

### TC008: Login with Empty Fields
**Description**: Verify that system validates required fields during login
**Preconditions**: User is on the login page
**Test Steps**:
1. Navigate to the login page
2. Leave email and/or password fields empty
3. Click "Sign In" button
**Expected Results**: 
- Error messages for empty fields are displayed
- User remains on login page
**Status**: Pass
**Comments**: System properly validates login form fields 