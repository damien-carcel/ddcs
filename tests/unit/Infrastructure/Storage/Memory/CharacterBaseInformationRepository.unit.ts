import CharacterBaseInformationRepositoryAdapter from '@/Infrastructure/Storage/Memory/CharacterBaseInformationRepositoryAdapter';
import characterBaseInformationFixtures from '../../../../fixtures/CharacterBaseInformation/complete.json';
import { CharacterBaseInformation } from '@/Domain/CharacterBase/Model/CharacterBaseInformation';

describe('Tests the "in memory" adapter of the character base information repository', () => {
  it('gets the character base information', () => {
    const repository = new CharacterBaseInformationRepositoryAdapter(characterBaseInformationFixtures);

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

    expect(repository.get()).toStrictEqual(new CharacterBaseInformation(characterBaseInformationFixtures));
  });

  it('udpates the character base information', () => {
    const updatedCharacterBaseInformationFixtures = {
      ...characterBaseInformationFixtures,
      ...{
        level: 2,
        age: 39,
        divinity: 'still none',
        weight: 100,
        hair: 'greyer',
      },
    };
    const characterBaseInformation = new CharacterBaseInformation(updatedCharacterBaseInformationFixtures);

    const repository = new CharacterBaseInformationRepositoryAdapter(characterBaseInformationFixtures);
    repository.save(characterBaseInformation);

    expect(repository.get()).toStrictEqual(new CharacterBaseInformation(updatedCharacterBaseInformationFixtures));
  });
});
