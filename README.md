```md
# Cypress Automation Suite for Magento Website

## Project Overview
This project is an end-to-end test automation suite for the Magento website, built using Cypress with TypeScript and following the Page Object Model (POM). It automates Sign-Up, Login, Logout, and Forgot Password functionalities, ensuring a smooth user experience.

## Features
- Automated Functional Test Cases  
- Page Object Model (POM) for Code Reusability  
- GitHub Actions CI/CD for Automated Execution  
- HTML Reports, Videos, and Screenshots for Debugging  
- Test Data Management using Fixtures  

## Tech Stack & Tools
- Automation Framework: Cypress with TypeScript  
- Test Structure: Page Object Model (POM)  
- Reporting: Mochawesome Reports  
- CI/CD: GitHub Actions  
- Test Execution Browser: Chrome (Headless Mode)  

## Installation & Setup
### Clone the Repository
git clone [GitHub Repository URL]
cd [Project Folder]

### Install Dependencies
npm install

### Run Tests Locally
#### Run Cypress in Chrome (Headless Mode)

npx cypress run --browser chrome --headless

#### Run Cypress in GUI Mode

npx cypress open

## Test Case Details
### Functionalities Automated
| Test Case ID | Test Scenario | Status |
|-------------|--------------|--------|
| UC01 | Verify that a new user can create an account | Automated |
| UC02 | Verify that a user cannot sign up with an existing email | Automated |
| UC03 | Verify password confirmation mismatch error | Automated |
| UC04 | Verify invalid email format error | Automated |
| UC05 | Verify required fields validation | Automated |
| UC06 | Verify password strength validation | Automated |
| UC07 | Verify special characters are not allowed in Name fields | Automated |
| UC08 | Verify that a user can log in with valid credentials | Automated |
| UC09 | Verify login failure with an incorrect password | Automated |
| UC10 | Verify login failure with an unregistered email | Automated |
| UC11 | Verify login failure with empty fields | Automated |
| UC12 | Verify that a user can log out successfully | Automated |
| UC13 | Verify that a user can send a password reset email | Automated |

## GitHub Actions CI/CD
This project is integrated with GitHub Actions, running tests on every push and pull request.

## Reporting & Debugging
- HTML Test Report: Available in `cypress/reports/mochawesome.html`
- Screenshots of Failed Tests: Stored in `cypress/screenshots/`
- Test Execution Videos: Stored in `cypress/videos/`

## Edge Cases Considered
- Sign-up with Unicode characters
- Handling extra-long input values
- Multiple session logins
- Handling SQL injection attempts in login fields

Note: The edge cases are currently not automated 

## Contact
If you have any questions or need further clarifications, feel free to reach out.  

Email: simran4work@outlook.com 
LinkedIn: https://www.linkedin.com/in/simran-c-622360129/
GitHub: https://github.com/Simranchoudhary

# Happy Testing!
