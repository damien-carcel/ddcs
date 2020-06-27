import { CharacterBaseInformation } from "@/domain/characterBase/model/CharacterBaseInformation";
import CharacterBaseInformationRepository from "@/domain/characterBase/repository/CharacterBaseInformationRepository";

export default class CharacterBaseInformationService {
  constructor(private repository: CharacterBaseInformationRepository) {}

  get(): CharacterBaseInformation {
    const storedCharacterBaseInformation = this.repository.get();

    if (null === storedCharacterBaseInformation) {
      return {
        name: "",
        class: "",
        level: "",
        sizeCategory: "",
        size: "",
        age: "",
        sex: "",
        playerName: "",
        race: "",
        alignment: "",
        divinity: "",
        weight: "",
        eyes: "",
        hair: "",
        skin: "",
      };
    }

    return JSON.parse(storedCharacterBaseInformation);
  }

  save(characterBaseInformation: CharacterBaseInformation): void {
    this.repository.save(characterBaseInformation);
  }
}
