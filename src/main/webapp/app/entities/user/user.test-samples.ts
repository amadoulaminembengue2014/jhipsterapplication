import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 22391,
  login: '-',
};

export const sampleWithPartialData: IUser = {
  id: 23646,
  login: '`as9@xQy\\hyDv\\PZbd\\wMWLcC\\tTqxIq',
};

export const sampleWithFullData: IUser = {
  id: 14646,
  login: 'F',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
