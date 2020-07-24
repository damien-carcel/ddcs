type CharacterBaseInformationData = {
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
  identifier: keyof CharacterBaseInformationData;
  value: string;
};

class CharacterBaseInformation {
  private readonly data: CharacterBaseInformationData;

  constructor(data: CharacterBaseInformationData) {
    this.data = data;
  }

  getData(): CharacterBaseInformationData {
    return this.data;
  }

  get(key: string): string {
    return this.data[<keyof CharacterBaseInformationData>key];
  }

  update(data: NewCharacterBaseValue): void {
    this.data[data.identifier] = data.value;
  }
}

export { CharacterBaseInformationData, NewCharacterBaseValue, CharacterBaseInformation };
