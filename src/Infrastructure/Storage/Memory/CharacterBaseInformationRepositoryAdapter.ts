import CharacterBaseInformationRepository from '@/Domain/CharacterBase/Repository/CharacterBaseInformationRepository';
import { CharacterBaseInformation } from '@/Domain/CharacterBase/Types/CharacterBaseInformation';

export default class CharacterBaseInformationRepositoryAdapter implements CharacterBaseInformationRepository {
  private characterBaseInformation: string | null;

  constructor(characterBaseInformation: string | null = null) {
    this.characterBaseInformation = characterBaseInformation;
  }

  get(): string | null {
    return this.characterBaseInformation;
  }

  save(characterBaseInformation: CharacterBaseInformation): void {
    this.characterBaseInformation = JSON.stringify(characterBaseInformation);
  }
}
