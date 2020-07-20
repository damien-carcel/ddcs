import { fixtures as characterBaseInformationFixtures } from '../../../../fixtures/CharacterBaseInformation';
import CharacterBaseInformationRepositoryAdapter from '@/infrastructure/storage/localStorage/CharacterBaseInformationRepositoryAdapter';

describe('Tests the local storage adapter of the character base information repository', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('gets the character base information', () => {
    localStorage.setItem('characterBaseInformation', JSON.stringify(characterBaseInformationFixtures));

    const repository = new CharacterBaseInformationRepositoryAdapter();
    const characterBaseInformation = repository.get();

    expect(characterBaseInformation).toStrictEqual(JSON.stringify(characterBaseInformationFixtures));
  });

  it("gets nothing if there's nothing to get", () => {
    const repository = new CharacterBaseInformationRepositoryAdapter();

    const characterBaseInformation = repository.get();

    expect(characterBaseInformation).toBeNull();
  });

  it('saves the character base information', () => {
    const repository = new CharacterBaseInformationRepositoryAdapter();
    repository.save(characterBaseInformationFixtures);

    expect(localStorage.getItem('characterBaseInformation')).toStrictEqual(
      JSON.stringify(characterBaseInformationFixtures)
    );
  });

  it('udpates the character base information', () => {
    localStorage.setItem('characterBaseInformation', JSON.stringify(characterBaseInformationFixtures));

    const updatedCharacterBaseInformation = {
      ...characterBaseInformationFixtures,
      ...{
        level: '2',
        age: '39',
        divinity: 'still none',
        weight: '100 kg',
        hair: 'greyer',
      },
    };

    const repository = new CharacterBaseInformationRepositoryAdapter();
    repository.save(updatedCharacterBaseInformation);

    expect(localStorage.getItem('characterBaseInformation')).toStrictEqual(
      JSON.stringify(updatedCharacterBaseInformation)
    );
  });
});
