import { Container } from "inversify";
import { TYPES } from "@/type";
import CharacterBaseInformationRepositoryAdapter from "@/infrastructure/storage/localStorage/CharacterBaseInformationRepositoryAdapter";
import CharacterBaseInformationService from "@/domain/characterBase/service/CharacterBaseInformationService";
import CharacterBaseInformationRepository from "@/domain/characterBase/repository/CharacterBaseInformationRepository";

const container = new Container();
// Bind domain services
container
  .bind<CharacterBaseInformationService>(TYPES.CharacterBaseInformationService)
  .to(CharacterBaseInformationService);
// bind infrastructure services
container
  .bind<CharacterBaseInformationRepository>(TYPES.CharacterBaseInformationRepository)
  .to(CharacterBaseInformationRepositoryAdapter);

export { container };
