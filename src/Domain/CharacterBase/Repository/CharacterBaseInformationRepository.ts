import { CharacterBaseInformation } from '@/Domain/CharacterBase/Model/CharacterBaseInformation';

export default interface CharacterBaseInformationRepository {
  get(): CharacterBaseInformation | null;
  save(characterBaseInformation: CharacterBaseInformation): void;
}
