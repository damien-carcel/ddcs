import { CharacterBaseInformation } from "@/domain/characterBase/model/CharacterBaseInformation";

type NewCharacterBaseValue = {
  identifier: keyof CharacterBaseInformation;
  value: string;
};

export { NewCharacterBaseValue };
