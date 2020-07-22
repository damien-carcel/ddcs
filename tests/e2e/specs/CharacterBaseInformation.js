describe("As a player, I can manage my character's base information", () => {
  it("I can get the character's base information for the first time", () => {
    cy.fixture('CharacterBaseInformation/empty.json').then((characterBaseInformationFixtures) => {
      cy.visit('/');

      for (const fixture in characterBaseInformationFixtures) {
        cy.get(`input[id="${fixture}"]`).should('have.value', characterBaseInformationFixtures[fixture]);
      }
    });
  });

  it("I can get existing character's base information", () => {
    cy.fixture('CharacterBaseInformation/complete.json').then((characterBaseInformationFixtures) => {
      cy.setLocalStorage('characterBaseInformation', JSON.stringify(characterBaseInformationFixtures));

      cy.visit('/');

      for (const fixture in characterBaseInformationFixtures) {
        cy.get(`input[id="${fixture}"]`).should('have.value', characterBaseInformationFixtures[fixture]);
      }
    });
  });

  it("I can save the character's base information", () => {
    cy.fixture('CharacterBaseInformation/complete.json').then((characterBaseInformationFixtures) => {
      cy.visit('/');

      for (const fixture in characterBaseInformationFixtures) {
        cy.get(`input[id="${fixture}"]`).type(characterBaseInformationFixtures[fixture]);
      }

      cy.getLocalStorage('characterBaseInformation').should('equal', JSON.stringify(characterBaseInformationFixtures));
    });
  });
});
