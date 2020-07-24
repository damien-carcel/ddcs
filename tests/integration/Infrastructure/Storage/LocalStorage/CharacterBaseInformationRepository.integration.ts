import characterBaseInformationFixtures from '../../../../fixtures/CharacterBaseInformation/complete.json';
import CharacterBaseInformationRepositoryAdapter from '@/Infrastructure/Storage/LocalStorage/CharacterBaseInformationRepositoryAdapter';
import { CharacterBaseInformation } from '@/Domain/CharacterBase/Model/CharacterBaseInformation';

describe('Tests the local storage adapter of the character base information repository', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('gets the character base information', () => {
    localStorage.setItem('characterBaseInformation', JSON.stringify(characterBaseInformationFixtures));

    const repository = new CharacterBaseInformationRepositoryAdapter();
    const characterBaseInformation = repository.get();

    expect(characterBaseInformation).toStrictEqual(new CharacterBaseInformation(characterBaseInformationFixtures));
  });

  it('gets nothing if the character sheet is new', () => {
    const repository = new CharacterBaseInformationRepositoryAdapter();

    const characterBaseInformation = repository.get();

    expect(characterBaseInformation).toBeNull();
  });

  it('saves the character base information for the first time', () => {
    const characterBaseInformation = new CharacterBaseInformation(characterBaseInformationFixtures);

    const repository = new CharacterBaseInformationRepositoryAdapter();
    repository.save(characterBaseInformation);

    expect(localStorage.getItem('characterBaseInformation')).toStrictEqual(
      JSON.stringify(characterBaseInformationFixtures)
    );
  });

  it('udpates the character base information', () => {
    localStorage.setItem('characterBaseInformation', JSON.stringify(characterBaseInformationFixtures));

    const updatedCharacterBaseInformation = {
      ...characterBaseInformationFixtures,
      ...{
        level: 2,
        age: 39,
        divinity: 'still none',
        weight: 100,
        hair: 'greyer',
      },
    };
    const characterBaseInformation = new CharacterBaseInformation(updatedCharacterBaseInformation);

    const repository = new CharacterBaseInformationRepositoryAdapter();
    repository.save(characterBaseInformation);

    expect(localStorage.getItem('characterBaseInformation')).toStrictEqual(
      JSON.stringify(updatedCharacterBaseInformation)
    );
  });
});
