import { CharacterBaseInformation } from '@/Domain/CharacterBase/Types/CharacterBaseInformation';

export default interface CharacterBaseInformationRepository {
  get(): string | null;
  save(characterBaseInformation: CharacterBaseInformation): void;
}
