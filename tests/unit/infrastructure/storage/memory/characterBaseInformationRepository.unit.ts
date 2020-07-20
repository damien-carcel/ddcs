import CharacterBaseInformationRepositoryAdapter from '@/infrastructure/storage/memory/CharacterBaseInformationRepositoryAdapter';
import { fixtures as characterBaseInformationFixtures } from '../../../../fixtures/CharacterBaseInformation';

describe('Tests the "in memory" adapter of the character base information repository', () => {
  it('gets the character base information', () => {
    const repository = new CharacterBaseInformationRepositoryAdapter(JSON.stringify(characterBaseInformationFixtures));

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

    expect(repository.get()).toStrictEqual(JSON.stringify(characterBaseInformationFixtures));
  });

  it('udpates the character base information', () => {
    const repository = new CharacterBaseInformationRepositoryAdapter(JSON.stringify(characterBaseInformationFixtures));

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

    repository.save(updatedCharacterBaseInformation);

    expect(repository.get()).toStrictEqual(JSON.stringify(updatedCharacterBaseInformation));
  });
});