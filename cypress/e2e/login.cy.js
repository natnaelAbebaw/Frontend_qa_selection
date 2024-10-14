describe("Login workflow", () => {
  it("Forward to login page", () => {
    /* 
    A user clicks the "Join Us" button, which redirects them to the login page. 
    This test checks if the redirection works properly,
     ensuring the user is taken to the login page as expected.
    */

    // visit the website
    cy.visit("http://localhost:3000");

    cy.wait(30000);

    // click on "join us" button
    cy.get(".btn-link").click();

    cy.url().should("include", "/login", { timeout: 10000 });
  });

  it("Login with a valid alidia account", () => {
    /* 
    Log in with a valid Aladia account by assuming the user already has a registered account. 
    I have stored this account in memory for testing purposes. When a login attempt is made,
    the system checks if the email provided matches an existing Aladia account in memory. 
    If a matching email is found, the process moves forward to the verification step.

    */

    // a wrap up code to not repeat the code again.
    cy.forwardToLogin();

    //The input field is dynamic, so we need to await for some time as it might be re-rendered immediately.
    cy.wait(500);

    // login  with a valid aladia account: i.e I assumed an account with this email:"natty@gmail.com" have already signup and i stored in the memory for the test perpose.
    cy.get('input[name="email"]').type("natty@gmail.com");

    // submit the form
    cy.get(".btn-submit").click();

    // I have checked if the account in the list of the aladia account this it forward to a verfication page
    cy.url().should("include", "/welcomeEmailConfirmation", { timeout: 10000 });
  });

  // login with invalid email
  it("Submit the form without entering email.", () => {
    /* 
    This test verifies what happens when the user attempts to submit the form without entering an email address. 
    It ensures that the system correctly detects the missing input and triggers appropriate validation mechanisms.
    The expected outcome includes displaying a warning or error message, prompting the user to enter a valid email before proceeding. 
    This helps confirm that the form cannot be submitted with empty required fields.
    */

    // a wrap up code to not repeat the code again.
    cy.forwardToLogin();

    // submit the form
    cy.get(".btn-submit").click();

    // checks if it got "Email is required" text
    cy.contains("Email is required").should("be.visible");
  });

  it("Submit the form with invalid email.", () => {
    /* 
   This test checks the behavior when the user enters an invalid email.
   It simulates a scenario where the email provided does incorrectly formatted. 
   The test ensures that appropriate error handling occurs, such as displaying an error message or preventing further steps,
  indicating that the email is incorrectly formatted.
    */

    // a wrap up code to not repeat the code again.
    cy.forwardToLogin();

    // login  with a valid aladia account: i.e I assumed an account with this email:"natty@gmail.com" have already signup and i stored in the memory for the test perpose.
    cy.get('input[name="email"]').type("natty.oddms");

    // submit the form
    cy.get(".btn-submit").click();

    // checks if it got "Email must be a valid email" text
    cy.contains("Email must be a valid email").should("be.visible");
  });

  // Login with google assuming someone was aleady setup with google
  it("Login with Google.", () => {
    /* This test simulates the login process using Google, assuming the user has previously set up their account through Google authentication.
    If the user has an active Google session or with googleId, The page forwards to password recovery page. 
    The test ensures that the Google login flow works and that users who have previously registered with Google can access their account without issues.
    */

    // a wrap up code to not repeat the code again.
    cy.forwardToLogin();

    //Login with a google gmail: "google@gmail.com" that the user has already setup an active google session.
    cy.get('input[name="email"]').type("google@gmail.com");

    // submit the form
    cy.get(".btn-submit").click();

    //This forwards to a gooogle password recoverry page
    cy.url().should("include", "/googlePasswordRecovery", { timeout: 10000 });
  });
});
