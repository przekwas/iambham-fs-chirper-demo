export interface IChirp {
	id: number;
	userid: number;
	content: string;
	created_at: Date;
	username: string;
}

export interface IUser {
	id: number;
	username: string;
}