import {
  CharacterBaseInformation,
  CharacterBaseInformationData,
} from '@/Domain/CharacterBase/Model/CharacterBaseInformation';
import characterBaseInformationFixtures from '../../../../fixtures/CharacterBaseInformation/complete.json';

describe('Test the CharacterBaseInformationData model', () => {
  it('returns all the character base information', () => {
    const characterBaseInformation = new CharacterBaseInformation(characterBaseInformationFixtures);

    expect(characterBaseInformation.getData()).toStrictEqual(characterBaseInformationFixtures);
  });

  it('returns a specific character base information', () => {
    const characterBaseInformation = new CharacterBaseInformation(characterBaseInformationFixtures);

    Object.keys(characterBaseInformationFixtures).forEach((specificData) => {
      expect(characterBaseInformation.get(specificData)).toStrictEqual(
        characterBaseInformationFixtures[<keyof CharacterBaseInformationData>specificData]
      );
    });
  });

  it('updates a specific character base information', () => {
    const characterBaseInformation = new CharacterBaseInformation(characterBaseInformationFixtures);

    characterBaseInformation.update({ identifier: 'name', value: 'A new name' });

    expect(characterBaseInformation.get('name')).toStrictEqual('A new name');
  });
});
