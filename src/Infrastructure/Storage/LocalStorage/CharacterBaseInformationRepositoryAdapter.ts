import { CharacterBaseInformation } from '@/Domain/CharacterBase/Model/CharacterBaseInformation';
import CharacterBaseInformationRepository from '@/Domain/CharacterBase/Repository/CharacterBaseInformationRepository';

export default class CharacterBaseInformationRepositoryAdapter implements CharacterBaseInformationRepository {
  get(): CharacterBaseInformation | null {
    const storedData = localStorage.getItem('characterBaseInformation');
    if (null === storedData) {
      return null;
    }

    return new CharacterBaseInformation(JSON.parse(storedData));
  }

  save(characterBaseInformation: CharacterBaseInformation): void {
    localStorage.setItem('characterBaseInformation', JSON.stringify(characterBaseInformation.getData()));
  }
}
