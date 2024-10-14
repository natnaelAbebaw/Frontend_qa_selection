// login with gmail that has not aladia account and not get session with thrid party login and moving to sign up

describe("Signup workflow", () => {
  it("Log in with an email that is neither an Aladia account nor associated with any third-party logins.", () => {
    /* 
   A user attempts to log in using an email that is not registered as an Aladia account and is not linked to any third-party logins.
   Upon submitting the login form, it forwards to signup page. 
    */
    // a wrap up code to not repeat the code again.
    cy.forwardToLogin();

    //Log in with an email:"natnaelabebaw22@gmail.com" that is neither an Aladia account nor associated with any third-party logins.
    cy.get('input[name="email"]').type("natnaelabebaw22@gmail.com");

    // submit the form
    cy.get(".btn-submit").click();

    // move to signup page
    cy.url().should("include", "/signup", { timeout: 10000 });
  });

  it("Submiting the signup form with out entering fields.", () => {
    /* 
   The application should prevent the form submission and display validation messages indicating that all fields are required, 
   prompting the user to enter the necessary information before proceeding.   
    */

    // a wrap up code to not repeat the code again.
    cy.forwardToSignup();

    cy.get(".btn-submit-signup").click();

    // those texts will display.
    cy.contains("name is required").should("be.visible");
    cy.contains("surname is required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
    cy.contains("Confirm password is required").should("be.visible");
  });

  it("Sign up with invalid email.", () => {
    /* 
   A user attempts to sign up by entering an invalid email address, such as user@invalid. 
   Upon clicking "Submit," the system triggers validation, displays an error message like “Email must be a valid email,” 
   and prevents submission. The user is prompted to correct their email to a proper format, ensuring a smoother signup experience.
    */

    // a wrap up code to not repeat the code again.
    cy.forwardToSignup();

    // a wrap up code to not repeat the code again.
    cy.signup("natnael", "abebaw", "asassas", "12345678", "12345678");

    cy.contains("Email must be a valid email").should("be.visible");
  });

  it("Entering password less than 8 characters", () => {
    /* 
    A user attempts to sign up by entering a password shorter than the required 8 characters.
    Upon clicking "Submit," the system triggers validation and displays an error message stating,
    “Password must be at least 8 characters long” The form submission is blocked,
     prompting the user to create a longer password to proceed with the signup.
    */

    // a wrap up code to not repeat the code again.
    cy.forwardToSignup();

    cy.signup("natnael", "abebaw", "natnaell70a@gmail.com", "1234", "1234");

    cy.contains("Password must be at least 8 characters long").should(
      "be.visible"
    );
  });

  it("Passwords not match", () => {
    /* 
     A user attempts to sign up by entering different values in the "Password" and "Confirm Password" fields. 
     After clicking "Submit," the system triggers validation and displays an error message stating, 
     “Passwords must match” The form submission is blocked, prompting the user to ensure both password fields 
     contain identical entries before proceeding with the signup.
    */

    // a wrap up code to not repeat the code again.
    cy.forwardToSignup();

    cy.signup(
      "natnael",
      "abebaw",
      "natnaell70a@gmail.com",
      "12345678",
      "sdsdw23231"
    );

    cy.contains("Passwords must match").should("be.visible");
  });

  it("Sign up with correct credentials", () => {
    /* 
     A user successfully signs up by entering valid credentials in the signup form, including a unique username,
     a strong password of at least 8 characters, and a correctly formatted email address. Upon clicking the "Submit" button, 
     a welcome screen with email comfirmation shown up.
    */

    // a wrap up code to not repeat the code again.
    cy.forwardToSignup();

    cy.signup(
      "natnael",
      "abebaw",
      "natnaell70a@gmail.com",
      "12345678",
      "12345678"
    );

    cy.url().should("include", "/welcomeEmailConfirmation", { timeout: 10000 });
  });
});
