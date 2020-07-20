import { CharacterBaseInformation } from '@/domain/characterBase/types/CharacterBaseInformation';

type NewCharacterBaseValue = {
  identifier: keyof CharacterBaseInformation;
  value: string;
};

export { NewCharacterBaseValue };
