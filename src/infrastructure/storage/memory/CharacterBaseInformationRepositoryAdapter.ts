import CharacterBaseInformationRepository from '@/domain/characterBase/repository/CharacterBaseInformationRepository';
import { CharacterBaseInformation } from '@/domain/characterBase/model/CharacterBaseInformation';

export default class CharacterBaseInformationRepositoryAdapter implements CharacterBaseInformationRepository {
  private characterBaseInformation: Record<string, unknown>;

  constructor(characterBaseInformation: Record<string, unknown>) {
    this.characterBaseInformation = characterBaseInformation;
  }

  get(): string | null {
    return JSON.stringify(this.characterBaseInformation);
  }

  save(characterBaseInformation: CharacterBaseInformation): void {
    this.characterBaseInformation = characterBaseInformation;
  }
}
