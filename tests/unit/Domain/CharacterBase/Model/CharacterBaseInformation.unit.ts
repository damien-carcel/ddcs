import { CharacterBaseInformation } from '@/Domain/CharacterBase/Model/CharacterBaseInformation';
import characterBaseInformationFixtures from '../../../../fixtures/CharacterBaseInformation/complete.json';

describe('Test the CharacterBaseInformationData model', () => {
  it('returns all the character base information', () => {
    const characterBaseInformation = new CharacterBaseInformation(characterBaseInformationFixtures);

    expect(characterBaseInformation.getData()).toStrictEqual(characterBaseInformationFixtures);
  });

  it('returns a specific character base information', () => {
    const characterBaseInformation = new CharacterBaseInformation(characterBaseInformationFixtures);

    expect(characterBaseInformation.get('name')).toStrictEqual(characterBaseInformationFixtures['name']);
  });

  it('updates a specific character base information', () => {
    const characterBaseInformation = new CharacterBaseInformation(characterBaseInformationFixtures);

    characterBaseInformation.update({ identifier: 'name', value: 'A new name' });

    expect(characterBaseInformation.get('name')).toStrictEqual('A new name');
  });
});
