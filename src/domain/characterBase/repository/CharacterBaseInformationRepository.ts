import { CharacterBaseInformation } from '@/domain/characterBase/types/CharacterBaseInformation';

export default interface CharacterBaseInformationRepository {
  get(): string | null;
  save(characterBaseInformation: CharacterBaseInformation): void;
}
