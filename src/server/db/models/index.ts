export interface TChirps {
	id?: number;
	userid?: number;
	content?: string;
	created_at?: Date;
}

export interface TUsers {
	id?: number;
	username?: string;
	email?: string;
	password?: string;
	created_at?: Date;
}