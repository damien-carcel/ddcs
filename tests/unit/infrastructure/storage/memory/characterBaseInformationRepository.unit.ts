import CharacterBaseInformationRepositoryAdapter from '@/infrastructure/storage/memory/CharacterBaseInformationRepositoryAdapter';

describe('Tests the "in memory" adapter of the character base information repository', () => {
  const characterBaseInformationFixtures = {
    name: 'Damien',
    class: 'coder',
    level: '1',
    sizeCategory: 'l',
    size: '1 meter 85',
    age: '38',
    sex: 'm',
    playerName: 'Carcel',
    race: 'human',
    alignment: 'cm',
    divinity: 'none',
    weight: '105 kg',
    eyes: 'brown',
    hair: 'brown',
    skin: 'pale',
  };

  it('gets the character base information', () => {
    const repository = new CharacterBaseInformationRepositoryAdapter(characterBaseInformationFixtures);

    const characterBaseInformation = repository.get();

    expect(characterBaseInformation).toStrictEqual(JSON.stringify(characterBaseInformationFixtures));
  });

  it('saves the character base information', () => {
    const repository = new CharacterBaseInformationRepositoryAdapter({});

    repository.save(characterBaseInformationFixtures);

    expect(repository.get()).toStrictEqual(JSON.stringify(characterBaseInformationFixtures));
  });

  it('udpates the character base information', () => {
    const repository = new CharacterBaseInformationRepositoryAdapter(characterBaseInformationFixtures);

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
