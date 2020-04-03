import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import { composeValidation } from '../../utils';

const EditForm: React.FC<EditFormProps> = (props) => {
	const { chirpid } = useParams();
	const [content, setContent] = React.useState<string>('');
	const [error, setError] = React.useState<string>(null);
    const [chars, setChars] = React.useState<number>(0);
    
    React.useEffect(() => {
		setContent(props.info);
	}, [props.info]);

	React.useEffect(() => {
		setError(null);
	}, [content]);

	React.useEffect(() => {
		setChars(content.length);
	}, [content]);

	const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const result = composeValidation(content);
		if (result) {
			setError(result);
		} else {
			props.editChirp(chirpid, content);
		}
	};

	const handleCutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.cutChirp(chirpid);
	};

	return (
		<>
			<form className="form-group p-3 border border-secondary rounded">
				<label htmlFor="content">What Ya Wanna Chirp</label>
				<textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control" rows={7} />
				<div className="d-flex justify-content-between">
					<small>Markdown is supported.</small>
					<small className={chars > 241 ? 'text-danger' : null}>{chars} / 241</small>
				</div>
				<div className="d-flex justify-content-between align-items-center mt-3">
					<button onClick={handleSaveClick} className="btn btn-outline-primary">
						Save It
					</button>
					<button onClick={handleCutClick} className="btn btn-outline-warning">
						Cut It
					</button>
				</div>
				{error && <small className="position-fixed text-danger toasty-edit">{error}</small>}
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

interface EditFormProps {
	editChirp: (id: string, content: string) => Promise<void>;
    cutChirp: (id: string) => Promise<void>;
    info: string;
}

export default EditForm;
