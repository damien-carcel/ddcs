import Vue from "vue";
import Vuex from "vuex";
import { NewCharacterBaseValue } from "@/model/CharacterBase";

Vue.use(Vuex);

const getCharacterBaseInformation = () => {
  const storedCharacterBaseInformation =
    localStorage.getItem("characterBaseInformation") ?? null;

  if (null === storedCharacterBaseInformation) {
    return {
      name: "",
      class: "",
      level: "",
      sizeCategory: "",
      size: "",
      age: "",
      sex: "",
      playerName: "",
      race: "",
      alignment: "",
      divinity: "",
      weight: "",
      eyes: "",
      hair: "",
      skin: "",
    };
  }

  return JSON.parse(storedCharacterBaseInformation);
};

export default new Vuex.Store({
  state: {
    characterBaseInformation: getCharacterBaseInformation(),
  },
  mutations: {
    updateCharacterBaseInformation(
      state,
      newCharacterBaseValue: NewCharacterBaseValue
    ) {
      state.characterBaseInformation[newCharacterBaseValue.identifier] =
        newCharacterBaseValue.value;

      localStorage.setItem(
        "characterBaseInformation",
        JSON.stringify(state.characterBaseInformation)
      );
    },
  },
  actions: {},
  modules: {},
});
