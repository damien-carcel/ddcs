import { CharacterBaseInformation } from '@/domain/characterBase/types/CharacterBaseInformation';
import CharacterBaseInformationRepository from '@/domain/characterBase/repository/CharacterBaseInformationRepository';

export default class CharacterBaseInformationService {
  private repository: CharacterBaseInformationRepository;

  constructor(repository: CharacterBaseInformationRepository) {
    this.repository = repository;
  }

  get(): CharacterBaseInformation {
    const storedCharacterBaseInformation = this.repository.get();

    if (null === storedCharacterBaseInformation) {
      // TODO: use a factory after writing acceptance tests
      return {
        name: '',
        class: '',
        level: '',
        sizeCategory: '',
        size: '',
        age: '',
        sex: '',
        playerName: '',
        race: '',
        alignment: '',
        divinity: '',
        weight: '',
        eyes: '',
        hair: '',
        skin: '',
      };
    }

    return JSON.parse(storedCharacterBaseInformation);
  }

  save(characterBaseInformation: CharacterBaseInformation): void {
    this.repository.save(characterBaseInformation);
  }
}
