import { CharacterBaseInformation } from '@/domain/characterBase/model/CharacterBaseInformation';

export default interface CharacterBaseInformationRepository {
  get(): string | null;
  save(characterBaseInformation: CharacterBaseInformation): void;
}
