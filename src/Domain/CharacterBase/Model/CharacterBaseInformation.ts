type CharacterBaseInformationData = {
  name: string;
  class: string;
  level: number;
  sizeCategory: string;
  size: string;
  age: number;
  sex: string;
  playerName: string;
  race: string;
  alignment: string;
  divinity: string;
  weight: number;
  eyes: string;
  hair: string;
  skin: string;
};

type NewCharacterBaseValue = {
  key: keyof CharacterBaseInformationData;
  value: string | number;
};

class CharacterBaseInformation {
  // TODO: "any" is no good. The way data is updated need to be changed.
  constructor(private readonly data: any) {
    this.data = data;
  }

  getData(): CharacterBaseInformationData {
    return this.data;
  }

  get(key: string): string | number {
    return this.data[<keyof CharacterBaseInformationData>key];
  }

  update(newCharacterBaseValue: NewCharacterBaseValue): void {
    this.data[newCharacterBaseValue.key] = newCharacterBaseValue.value;
  }
}

export { CharacterBaseInformationData, NewCharacterBaseValue, CharacterBaseInformation };
