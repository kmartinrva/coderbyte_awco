describe("Allow Cookies", () => {
    it("Press button to allow cookies, cookie button no longer exists", () => {
      cy.visit("www.award.co");
      cy.contains("Dismiss").click()
      cy.contains("Dismiss").should('not.exist')
    });
  });

  describe("Hover Company About", () => {
    it("Does about link take me to about page?", () => {
      cy.contains("Company").trigger("mouseover")
      cy.contains("ABout").click()
      cy.contains("Reimagine").should('be.visible')
    });
  });

  describe("Sign In new tab", () => {
    it("Check if sign in will open in new tab", () => {
      cy.get("body > div.navigation-wrapper > div.navigation.w-nav > div.navigation-container > div.navigation-right > a.dropdown-toggle.login")
      .should('have.attr', 'target', '_blank')
    });
  });