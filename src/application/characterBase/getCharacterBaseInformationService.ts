import { CharacterBaseInformation } from '@/domain/characterBase/model/CharacterBaseInformation';
import { container } from '@/container';
import { TYPES } from '@/type';
import CharacterBaseInformationRepository from '@/domain/characterBase/repository/CharacterBaseInformationRepository';

export default function getCharacterBaseInformation(): CharacterBaseInformation {
  const repository = container.get<CharacterBaseInformationRepository>(TYPES.CharacterBaseInformationRepository);
  const storedCharacterBaseInformation = repository.get();

  if (null === storedCharacterBaseInformation) {
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
