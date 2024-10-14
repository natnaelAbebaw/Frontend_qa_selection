describe("Entry page", () => {
  it("Should move to entry page", () => {
    cy.visit("http://localhost:3000/");

    cy.matchImageSnapshot("Entry page");
  });

  it("Should move to login Page", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".btn-link").click();

    cy.wait(500);

    cy.matchImageSnapshot("Login page");
  });

  it("Should move to welcome Email verification page", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".btn-link").click();

    cy.wait(500);

    //Login with a google gmail: "google@gmail.com" that the user has already setup an active google session.
    cy.get('input[name="email"]').type("natty@gmail.com");

    // submit the form
    cy.get(".btn-submit").click();

    cy.wait(500);

    cy.matchImageSnapshot("Email verification page");
  });

  it("Should move to google password recovery page", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".btn-link").click();

    cy.wait(500);

    //Login with a google gmail: "google@gmail.com" that the user has already setup an active google session.
    cy.get('input[name="email"]').type("google@gmail.com");

    // submit the form
    cy.get(".btn-submit").click();

    cy.wait(500);

    cy.matchImageSnapshot("google password recovery page");
  });
});
