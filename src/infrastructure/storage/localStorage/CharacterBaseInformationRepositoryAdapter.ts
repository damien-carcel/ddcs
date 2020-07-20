import { CharacterBaseInformation } from '@/domain/characterBase/types/CharacterBaseInformation';
import CharacterBaseInformationRepository from '@/domain/characterBase/repository/CharacterBaseInformationRepository';

export default class CharacterBaseInformationRepositoryAdapter implements CharacterBaseInformationRepository {
  get(): string | null {
    return localStorage.getItem('characterBaseInformation') ?? null;
  }

  save(characterBaseInformation: CharacterBaseInformation): void {
    localStorage.setItem('characterBaseInformation', JSON.stringify(characterBaseInformation));
  }
}
