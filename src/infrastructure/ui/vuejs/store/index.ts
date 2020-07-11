import { container } from "@/container";
import { TYPES } from "@/type";

import Vue from "vue";
import Vuex from "vuex";

import CharacterBaseInformationService from "@/domain/characterBase/service/CharacterBaseInformationService";
import { NewCharacterBaseValue } from "@/domain/characterBase/model/NewCharacterBaseValue";

Vue.use(Vuex);

const characterBaseInformationService = container.get<CharacterBaseInformationService>(
  TYPES.CharacterBaseInformationService
);

export default new Vuex.Store({
  state: {
    characterBaseInformation: characterBaseInformationService.get(),
  },
  mutations: {
    updateCharacterBaseInformation(state, newCharacterBaseValue: NewCharacterBaseValue) {
      state.characterBaseInformation[newCharacterBaseValue.identifier] = newCharacterBaseValue.value;

      characterBaseInformationService.save(state.characterBaseInformation);
    },
  },
  actions: {},
  modules: {},
});
