import { fixtures as characterBaseInformationFixtures } from '../fixtures/CharacterBaseInformation';
import CharacterBaseInformationService from '@/application/CharacterBaseInformationService';
import CharacterBaseInformationRepositoryAdapter from '@/infrastructure/storage/memory/CharacterBaseInformationRepositoryAdapter';

describe("As a player, I can set my character's base information", () => {
  it("saves the character's base information", () => {
    const inMemoryRepository = new CharacterBaseInformationRepositoryAdapter();
    const characterBaseInformationService = new CharacterBaseInformationService(inMemoryRepository);

    characterBaseInformationService.save(characterBaseInformationFixtures);

    expect(inMemoryRepository.get()).toStrictEqual(JSON.stringify(characterBaseInformationFixtures));
  });
});
