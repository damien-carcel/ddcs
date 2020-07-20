import CharacterBaseInformationRepository from '@/domain/characterBase/repository/CharacterBaseInformationRepository';
import { CharacterBaseInformation } from '@/domain/characterBase/types/CharacterBaseInformation';

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
