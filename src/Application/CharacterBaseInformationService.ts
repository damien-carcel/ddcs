import { CharacterBaseInformation, NewCharacterBaseValue } from '@/Domain/CharacterBase/Model/CharacterBaseInformation';
import CharacterBaseInformationRepository from '@/Domain/CharacterBase/Repository/CharacterBaseInformationRepository';

export default class CharacterBaseInformationService {
  private repository: CharacterBaseInformationRepository;

  constructor(repository: CharacterBaseInformationRepository) {
    this.repository = repository;
  }

  get(): CharacterBaseInformation {
    const storedCharacterBaseInformation = this.repository.get();

    if (null === storedCharacterBaseInformation) {
      // TODO: use a factory after writing acceptance tests and use value objects with "toString", and select when needed
      return new CharacterBaseInformation({
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
      });
    }

    return storedCharacterBaseInformation;
  }

  update(characterBaseInformation: CharacterBaseInformation, newCharacterBaseValue: NewCharacterBaseValue): void {
    characterBaseInformation.update(newCharacterBaseValue);

    this.repository.save(characterBaseInformation);
  }
}
