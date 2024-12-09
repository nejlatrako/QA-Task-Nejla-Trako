# QA-Task-Nejla-Trako


This is the task that I was given and here you can find my solution. 
Investigate Contact List application and create test plan: https://thinking-tester-contact-list.herokuapp.com/

  1. Write UI and API test cases for this application (concentrate on real user flows, potentially combining multiple api calls in one test case)
  2. From all the test cases, identify what you think represents a Smoke Test (UI and API)
  3. Identify positive and negative test cases
  4. With a tool or programming/scripting language (JMeter, Python, Ruby, Java, Javascript...), automate the smoke test from #2 (it is plus if you are using some testing framework in any of the listed       programming/scripting languages)
  5. Create Github repository and push your assignment solution with the documentation on how to run the automated tests there
  6. Report bugs if you find any, with detailed steps to reproduce

Following are the instructions for running automated tests.


This repository contains the UI and API test automation for this project.

## Prerequisites

Ensure you have the following installed on your machine before running the tests:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Git**: [Download Git](https://git-scm.com/)

## Clone the Repository

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/nejlatrako/QA-Task-Nejla-Trako.git
   ```

2. Navigate to the project folder:
   ```bash
   cd QA-Task-Nejla-Trako
   ```

## Install Dependencies

Before running the tests, you'll need to install the required dependencies. In the repository folder, run the following command to install both Cypress and any other dependencies defined in `package.json`:

```bash
npm install

npm install cypress --save-dev
```

This will install:
- **Cypress** (for UI tests)
- Any additional dependencies for API testing (such as Postman collections)

## Running the Tests

### 1. **Running Cypress UI Tests**

To run Cypress tests, follow these steps:

1. Open Cypress in interactive mode:
   ```bash
   npx cypress open
   ```

2. This will launch the Cypress Test Runner in a new window. You can choose the test files to run interactively.

3. Alternatively, you can run the tests headlessly in the terminal:
   ```bash
   npx cypress run
   ```

This will run all the tests in headless mode and show the results in the terminal.

### 2. **Running Postman API Tests with Newman**

Because there are API tests written in Postman collections, you can run them using **Newman**, which is the command-line collection runner for Postman.

1. Ensure you have installed the `newman` package globally:
   ```bash
   npm install -g newman
   ```

2. Run the Postman collection (NejlaTrako-API-Tests.postman_collection.json):
   ```bash
   newman run path/to/collection.json
   ```

   This will execute the Postman API tests and show the results in the terminal.

### 3. **Running Specific Tests**

If you want to run a specific Cypress test or Postman collection, you can specify the test file or collection directly.

For Cypress:
```bash
npx cypress run --spec "cypress/integration/your-test-file.spec.js"
```

For Postman:
```bash
newman run path/to/your-specific-collection.json
```

### 4. **Reporting**

After running the tests, you can review the results in the terminal for Postman/Newman or in the Cypress Test Runner for UI tests. For more detailed reporting, you can configure additional reporting options in both Cypress and Newman.

### Selenium Tests (Python)

Since I had not previously worked with Selenium, I decided to try it because I noticed that the company uses it. I learned how to write tests using Selenium in Python as part of this task.

To run the Selenium tests, follow these steps:

#### Prerequisites
Ensure you have the following installed:

- Python (version 3.6 or above): Download Python
- Selenium WebDriver: Install using pip
- WebDriver for your browser (e.g., ChromeDriver for Chrome, GeckoDriver for Firefox)

#### Installing Dependencies
Before running the tests, you'll need to install the required dependencies for Python and Selenium. In your terminal, navigate to the project folder and run the following command:

```bash
pip install -r requirements.txt
```

This will install:

- Selenium (for UI tests in Python)
- Any other dependencies specified in the `requirements.txt` file.

#### Running the Tests
1. Open a terminal and navigate to the folder containing the Selenium tests.
2. Run the test file using Python:

```bash
python path/to/your-selenium-test.py
```

This will execute the Selenium UI tests in the specified browser and show the results in the terminal.


## Conclusion

Once the tests are run, the results will be available directly in the terminal for API tests and in the Cypress Test Runner for UI tests.
