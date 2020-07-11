import { injectable } from "inversify";
import { CharacterBaseInformation } from "@/domain/characterBase/model/CharacterBaseInformation";
import CharacterBaseInformationRepository from "@/domain/characterBase/repository/CharacterBaseInformationRepository";

@injectable()
export default class CharacterBaseInformationRepositoryAdapter implements CharacterBaseInformationRepository {
  get(): string | null {
    return localStorage.getItem("characterBaseInformation") ?? null;
  }

  save(characterBaseInformation: CharacterBaseInformation): void {
    localStorage.setItem("characterBaseInformation", JSON.stringify(characterBaseInformation));
  }
}
