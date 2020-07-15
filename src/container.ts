import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '@/type';
import CharacterBaseInformationRepositoryAdapter from '@/infrastructure/storage/localStorage/CharacterBaseInformationRepositoryAdapter';
import CharacterBaseInformationRepository from '@/domain/characterBase/repository/CharacterBaseInformationRepository';

const container = new Container();

container
  .bind<CharacterBaseInformationRepository>(TYPES.CharacterBaseInformationRepository)
  .to(CharacterBaseInformationRepositoryAdapter);

export { container };
