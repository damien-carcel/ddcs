import { CharacterBaseInformation } from '@/Domain/CharacterBase/Types/CharacterBaseInformation';
import CharacterBaseInformationRepository from '@/Domain/CharacterBase/Repository/CharacterBaseInformationRepository';

export default class CharacterBaseInformationRepositoryAdapter implements CharacterBaseInformationRepository {
  get(): string | null {
    return localStorage.getItem('characterBaseInformation') ?? null;
  }

  save(characterBaseInformation: CharacterBaseInformation): void {
    localStorage.setItem('characterBaseInformation', JSON.stringify(characterBaseInformation));
  }
}
