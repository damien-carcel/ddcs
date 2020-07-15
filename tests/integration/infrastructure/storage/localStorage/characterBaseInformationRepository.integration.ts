import { container } from '@/container';
import CharacterBaseInformationRepository from '@/domain/characterBase/repository/CharacterBaseInformationRepository';
import { TYPES } from '@/type';

describe('Tests the local storage adapter of the character base information repository', () => {
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

  beforeEach(() => {
    localStorage.setItem('characterBaseInformation', JSON.stringify({}));
  });

  it('gets the character base information', () => {
    localStorage.setItem('characterBaseInformation', JSON.stringify(characterBaseInformationFixtures));

    const characterBaseInformation = container
      .get<CharacterBaseInformationRepository>(TYPES.CharacterBaseInformationRepository)
      .get();

    expect(characterBaseInformation).toStrictEqual(JSON.stringify(characterBaseInformationFixtures));
  });

  it('saves the character base information', () => {
    container
      .get<CharacterBaseInformationRepository>(TYPES.CharacterBaseInformationRepository)
      .save(characterBaseInformationFixtures);

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

    container
      .get<CharacterBaseInformationRepository>(TYPES.CharacterBaseInformationRepository)
      .save(updatedCharacterBaseInformation);

    expect(localStorage.getItem('characterBaseInformation')).toStrictEqual(
      JSON.stringify(updatedCharacterBaseInformation)
    );
  });
});
