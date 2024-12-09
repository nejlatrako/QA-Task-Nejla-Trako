from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Initialize the WebDriver
driver = webdriver.Chrome()

def setup():
    # Open the application URL
    driver.get('https://thinking-tester-contact-list.herokuapp.com/')
    driver.maximize_window()

def test_login_page_display():
    # Verify that the login page is displayed
    login_text = driver.find_element(By.CSS_SELECTOR, '.main-content > :nth-child(1)').text
    assert 'Log In' in login_text, "Login page did not load correctly"
    print("Test 'Login Page Display' passed.")

def test_login_with_valid_credentials():
    # Verify that login works with valid credentials
    email_input = driver.find_element(By.ID, 'email')
    password_input = driver.find_element(By.ID, 'password')
    submit_button = driver.find_element(By.ID, 'submit')

    email_input.send_keys('nejla.test@gmail.com')
    password_input.send_keys('password123')
    submit_button.click()
    time.sleep(2)

    assert driver.current_url == 'https://thinking-tester-contact-list.herokuapp.com/contactList', f"Expected URL to be 'https://thinking-tester-contact-list.herokuapp.com/contactList', but got {driver.current_url}"
    print("Test 'Login with Valid Credentials' passed.")


def test_logout():
    driver.get('https://thinking-tester-contact-list.herokuapp.com/')
    
    email_input = driver.find_element(By.ID, 'email')
    password_input = driver.find_element(By.ID, 'password')
    submit_button = driver.find_element(By.ID, 'submit')
    
    email_input.send_keys('nejla.test@gmail.com')
    password_input.send_keys('password123')
    submit_button.click()

    time.sleep(2)  # Give time for page load

    # Perform logout
    logout_button = driver.find_element(By.ID, 'logout')
    logout_button.click()

    time.sleep(2)  # Give time for logout action to complete
    
    # Verify the logout by checking the URL
    assert '/' in driver.current_url, "Logout failed, still on contact list page"
    print("Test 'Logout' passed.")


# Run tests
setup()
test_login_page_display()
test_login_with_valid_credentials()
test_logout()

# Close the browser after tests
driver.quit()
