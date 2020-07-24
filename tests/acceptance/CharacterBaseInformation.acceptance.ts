import characterBaseInformationFixtures from '../fixtures/CharacterBaseInformation/complete.json';
import emptyCharacterBaseInformationFixtures from '../fixtures/CharacterBaseInformation/empty.json';
import CharacterBaseInformationService from '@/Application/CharacterBaseInformationService';
import CharacterBaseInformationRepositoryAdapter from '@/Infrastructure/Storage/Memory/CharacterBaseInformationRepositoryAdapter';
import { CharacterBaseInformation } from '@/Domain/CharacterBase/Model/CharacterBaseInformation';

describe("As a player, I can manage my character's base information", () => {
  it("gets the character's base information for the first time", () => {
    const inMemoryRepository = new CharacterBaseInformationRepositoryAdapter();
    const characterBaseInformationService = new CharacterBaseInformationService(inMemoryRepository);

    const characterBaseInformation = characterBaseInformationService.get();

    expect(characterBaseInformation).toStrictEqual(new CharacterBaseInformation(emptyCharacterBaseInformationFixtures));
  });

  it("gets existing character's base information", () => {
    const inMemoryRepository = new CharacterBaseInformationRepositoryAdapter(characterBaseInformationFixtures);
    const characterBaseInformationService = new CharacterBaseInformationService(inMemoryRepository);

    const characterBaseInformation = characterBaseInformationService.get();

    expect(characterBaseInformation).toStrictEqual(new CharacterBaseInformation(characterBaseInformationFixtures));
  });

  it("saves the character's base information for the first time", () => {
    const characterBaseInformation = new CharacterBaseInformation(emptyCharacterBaseInformationFixtures);

    const inMemoryRepository = new CharacterBaseInformationRepositoryAdapter();
    const characterBaseInformationService = new CharacterBaseInformationService(inMemoryRepository);

    characterBaseInformationService.update(characterBaseInformation, { key: 'name', value: 'My first name' });

    expect(inMemoryRepository.get()).toStrictEqual(
      new CharacterBaseInformation({
        ...emptyCharacterBaseInformationFixtures,
        ...{
          name: 'My first name',
        },
      })
    );
  });

  it("udpates the character's base information", () => {
    const characterBaseInformation = new CharacterBaseInformation(characterBaseInformationFixtures);

    const inMemoryRepository = new CharacterBaseInformationRepositoryAdapter(characterBaseInformationFixtures);
    const characterBaseInformationService = new CharacterBaseInformationService(inMemoryRepository);

    characterBaseInformationService.update(characterBaseInformation, { key: 'name', value: 'A new name' });

    expect(inMemoryRepository.get()).toStrictEqual(
      new CharacterBaseInformation({
        ...characterBaseInformationFixtures,
        ...{
          name: 'A new name',
        },
      })
    );
  });
});
