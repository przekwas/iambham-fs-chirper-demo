import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { usersService, composeValidation } from '../../utils';
import type { IUser } from '../../utils';

const ChirpForm: React.FC<ChirpFormProps> = (props) => {
	const [users, setUsers] = React.useState<IUser[]>([]);
	const [userid, setUserid] = React.useState<string>('0');
	const [content, setContent] = React.useState<string>('');
	const [error, setError] = React.useState<string>(null);
	const [chars, setChars] = React.useState<number>(0);

	React.useEffect(() => {
		(async () => {
			const users = await usersService.getAll();
			setUsers(users);
		})();
	}, []);

	React.useEffect(() => {
		setError(null);
	}, [userid, content]);

	React.useEffect(() => {
		setChars(content.length);
	}, [content]);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const result = composeValidation(content, userid);
		if (result) {
			setError(result);
		} else {
			props.submitChirp({ userid, content });
		}
	};

	return (
		<>
			<form className="form-group p-3 border border-secondary rounded">
				<label htmlFor="username">Who Be Chirpin'</label>
				<select value={userid} onChange={(e) => setUserid(e.target.value)} className="form-control mb-2">
					<option disabled value="0">
						Pick a Username
					</option>
					{users.map((user) => (
						<option key={`user-option-${user.id}`} value={`${user.id}`}>
							{user.username}
						</option>
					))}
				</select>
				<label htmlFor="content">What Ya Wanna Chirp</label>
				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Fox is OP plz nerf"
					className="form-control"
					rows={7}
				/>
				<div className="d-flex justify-content-between">
					<small>Markdown is supported.</small>
					<small className={chars > 241 ? 'text-danger' : null}>{chars} / 241</small>
				</div>
				<button onClick={handleClick} className="btn btn-outline-primary btn-block w-50 mx-auto mt-3">
					Blast It
				</button>
                    {error && <small className="position-fixed text-danger toasty-compose">{error}</small>}
			</form>
			<h6>Chirp Preview</h6>
			<div className="card">
				<div className="card-body">
					<ReactMarkdown className="card-text" source={content} />
				</div>
			</div>
		</>
	);
};

interface ChirpFormProps {
	submitChirp: (chirp: { userid: string; content: string }) => Promise<void>;
}

export default ChirpForm;
