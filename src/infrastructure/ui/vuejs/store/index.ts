import Vue from "vue";
import Vuex from "vuex";
import { NewCharacterBaseValue } from "@/domain/characterBase/model/NewCharacterBaseValue";
import CharacterBaseInformationService from "@/domain/characterBase/service/CharacterBaseInformationService";
import CharacterBaseInformationRepositoryLocalStorageAdapter from "@/infrastructure/storage/localStorage/CharacterBaseInformationRepositoryLocalStorageAdapter";

Vue.use(Vuex);

const characterBaseInformationService = new CharacterBaseInformationService(
  new CharacterBaseInformationRepositoryLocalStorageAdapter()
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
