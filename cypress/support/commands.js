import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand();

Cypress.Commands.add("forwardToLogin", (username, password) => {
  // visit the website
  cy.visit("http://localhost:3000");

  // click on "join us" button
  cy.get(".btn-link").click();

  //The input field is dynamic, so we need to await for some time as it might be re-rendered immediately.
  cy.wait(500);
});

Cypress.Commands.add("forwardToSignup", (username, password) => {
  // visit the website
  cy.visit("http://localhost:3000");

  // click on "join us" button
  cy.get(".btn-link").click();

  //The input field is dynamic, so we need to await for some time as it might be re-rendered immediately.
  cy.wait(500);

  //Log in with an email:"natnaelabebaw22@gmail.com" that is neither an Aladia account nor associated with any third-party logins.
  cy.get('input[name="email"]').type("natnaelabebaw22@gmail.com");

  // submit the form
  cy.get(".btn-submit").click();

  cy.wait(500);
});

Cypress.Commands.add(
  "signup",
  (name, surname, email, password, confirmPassword) => {
    cy.get('input[name="name"]').type(name);

    cy.get('input[name="surname"]').type(surname);

    cy.get('input[name="email"]').type(email);

    cy.get('input[name="password"]').type(password);

    cy.get('input[name="confirmPassword"]').type(confirmPassword);

    cy.get(".btn-submit-signup").click();
  }
);
