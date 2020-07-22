type CharacterBaseInformation = {
  name: string;
  class: string;
  level: string;
  sizeCategory: string;
  size: string;
  age: string;
  sex: string;
  playerName: string;
  race: string;
  alignment: string;
  divinity: string;
  weight: string;
  eyes: string;
  hair: string;
  skin: string;
};

type NewCharacterBaseValue = {
  identifier: keyof CharacterBaseInformation;
  value: string;
};

export { CharacterBaseInformation, NewCharacterBaseValue };
