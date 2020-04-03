import { api } from './';
import type { IChirp } from './interfaces';

export const getAll = () => api<IChirp[]>('/api/chirps');

export const getOne = (id: string) => api<IChirp>(`/api/chirps/${id}`);

export const add = (body: any) => api('/api/chirps', 'POST', body);

export const edit = (id: string, body: any) => api(`/api/chirps/${id}`, 'PUT', body);

export const destroy = (id: string) => api(`/api/chirps/${id}`, 'DELETE');