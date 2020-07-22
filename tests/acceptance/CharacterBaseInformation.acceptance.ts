import characterBaseInformationFixtures from '../fixtures/CharacterBaseInformation/complete.json';
import emptyCharacterBaseInformationFixtures from '../fixtures/CharacterBaseInformation/empty.json';
import CharacterBaseInformationService from '@/Application/CharacterBaseInformationService';
import CharacterBaseInformationRepositoryAdapter from '@/Infrastructure/Storage/Memory/CharacterBaseInformationRepositoryAdapter';

describe("As a player, I can manage my character's base information", () => {
  it("gets the character's base information for the first time", () => {
    const inMemoryRepository = new CharacterBaseInformationRepositoryAdapter();
    const characterBaseInformationService = new CharacterBaseInformationService(inMemoryRepository);

    const characterBaseInformation = characterBaseInformationService.get();

    expect(characterBaseInformation).toStrictEqual(emptyCharacterBaseInformationFixtures);
  });

  it("gets existing character's base information", () => {
    const inMemoryRepository = new CharacterBaseInformationRepositoryAdapter(
      JSON.stringify(characterBaseInformationFixtures)
    );
    const characterBaseInformationService = new CharacterBaseInformationService(inMemoryRepository);

    const characterBaseInformation = characterBaseInformationService.get();

    expect(characterBaseInformation).toStrictEqual(characterBaseInformationFixtures);
  });

  it("saves the character's base information", () => {
    const inMemoryRepository = new CharacterBaseInformationRepositoryAdapter();
    const characterBaseInformationService = new CharacterBaseInformationService(inMemoryRepository);

    characterBaseInformationService.save(characterBaseInformationFixtures);

    expect(inMemoryRepository.get()).toStrictEqual(JSON.stringify(characterBaseInformationFixtures));
  });
});
