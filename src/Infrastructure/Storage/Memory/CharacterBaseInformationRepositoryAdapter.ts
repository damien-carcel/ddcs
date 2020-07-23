import CharacterBaseInformationRepository from '@/Domain/CharacterBase/Repository/CharacterBaseInformationRepository';
import {
  CharacterBaseInformation,
  CharacterBaseInformationData,
} from '@/Domain/CharacterBase/Model/CharacterBaseInformation';

export default class CharacterBaseInformationRepositoryAdapter implements CharacterBaseInformationRepository {
  private characterBaseInformationData: CharacterBaseInformationData | null;

  constructor(characterBaseInformation: CharacterBaseInformationData | null = null) {
    this.characterBaseInformationData = characterBaseInformation;
  }

  get(): CharacterBaseInformation | null {
    if (null === this.characterBaseInformationData) {
      return null;
    }

    return new CharacterBaseInformation(this.characterBaseInformationData);
  }

  save(characterBaseInformation: CharacterBaseInformation): void {
    this.characterBaseInformationData = characterBaseInformation.getData();
  }
}
