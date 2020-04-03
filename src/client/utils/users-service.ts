import { api } from '.';
import type { IUser } from './interfaces';

export const getAll = () => api<IUser[]>('/api/users');