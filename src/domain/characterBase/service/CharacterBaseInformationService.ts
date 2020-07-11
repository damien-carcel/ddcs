import { inject, injectable } from "inversify";
import { CharacterBaseInformation } from "@/domain/characterBase/model/CharacterBaseInformation";
import CharacterBaseInformationRepository from "@/domain/characterBase/repository/CharacterBaseInformationRepository";
import { TYPES } from "@/type";

@injectable()
export default class CharacterBaseInformationService {
  constructor(
    @inject(TYPES.CharacterBaseInformationRepository) private repository: CharacterBaseInformationRepository
  ) {}

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
