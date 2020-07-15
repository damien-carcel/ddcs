import { CharacterBaseInformation } from '@/domain/characterBase/model/CharacterBaseInformation';
import CharacterBaseInformationRepository from '@/domain/characterBase/repository/CharacterBaseInformationRepository';
import { container } from '@/container';
import { TYPES } from '@/type';

export default function saveCharacterBaseInformation(characterBaseInformation: CharacterBaseInformation): void {
  const repository = container.get<CharacterBaseInformationRepository>(TYPES.CharacterBaseInformationRepository);

  repository.save(characterBaseInformation);
}
