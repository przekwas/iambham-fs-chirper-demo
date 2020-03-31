import { Query } from '../';

interface TChirps {
    id: number;
    userid: number;
    content: string; 
}

const all = () => Query<TChirps[]>(`
    SELECT
        chirps.*,
        users.username
    FROM chirps
    JOIN users ON users.id = chirps.userid
`);

export default {
    all
}