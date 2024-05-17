import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b432930c-a905-42be-8f2c-4260cf596b89',
};

export const sampleWithPartialData: IAuthority = {
  name: '28ed15a6-6a3d-42fe-9604-1b331c466c03',
};

export const sampleWithFullData: IAuthority = {
  name: 'dd9c375a-a6f7-41ec-b8af-cddafff90740',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
