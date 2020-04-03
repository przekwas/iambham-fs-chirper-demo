import * as React from 'react';
import { IChirp } from '../utils';

const ChirpCard: React.FC<ChirpCardProps> = props => {
	return (
		<div className="offset-md-3 col-md-6">
			<article className="card">
				<div className="card-body">
					<h6 className="card-title">@{props.chirp.username}</h6>
					<p className="card-text">{props.chirp.content}</p>
				</div>
			</article>
		</div>
	);
};

interface ChirpCardProps {
	chirp: IChirp;
}

export default ChirpCard;
