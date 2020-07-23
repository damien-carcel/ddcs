describe("As a player, I can manage my character's base information", () => {
  it("I can get the character's base information for the first time", () => {
    cy.fixture('CharacterBaseInformation/empty.json').then((characterBaseInformationFixtures) => {
      cy.visit('/');

      for (const specificData in characterBaseInformationFixtures) {
        cy.get(`input[id="${specificData}"]`).should('have.value', characterBaseInformationFixtures[specificData]);
      }
    });
  });

  it("I can get existing character's base information", () => {
    cy.fixture('CharacterBaseInformation/complete.json').then((characterBaseInformationFixtures) => {
      cy.setLocalStorage('characterBaseInformation', JSON.stringify(characterBaseInformationFixtures));

      cy.visit('/');

      for (const specificData in characterBaseInformationFixtures) {
        cy.get(`input[id="${specificData}"]`).should('have.value', characterBaseInformationFixtures[specificData]);
      }
    });
  });

  it("I can update the character's base information", () => {
    cy.fixture('CharacterBaseInformation/complete.json').then((characterBaseInformationFixtures) => {
      cy.visit('/');

      for (const specificData in characterBaseInformationFixtures) {
        cy.get(`input[id="${specificData}"]`).type(characterBaseInformationFixtures[specificData]);
      }

      cy.getLocalStorage('characterBaseInformation').should('equal', JSON.stringify(characterBaseInformationFixtures));
    });
  });
});
