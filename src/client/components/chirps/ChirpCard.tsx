import * as React from 'react';
import * as moment from 'moment';
import * as ReactMarkdown from 'react-markdown';
import { useHistory } from 'react-router';
import type { IChirp } from '../../utils';

const ChirpCard: React.FC<ChirpCardProps> = (props) => {
	const history = useHistory();
	const columns = props.fullSize ? 'col-md-12' : 'cursor offset-md-3 col-md-6';

	return (
		<div className={columns} onClick={props.fullSize ? null : () => history.push(`/details/${props.chirp.id}`)}>
			<article className="card">
				<div className="card-body">
					<h6 className="card-title">@{props.chirp.username}</h6>
					<ReactMarkdown className="card-text" source={props.chirp.content} />
					<small className="text-muted d-flex justify-content-end pb-0">
						<i>{moment(props.chirp.created_at).format('MMM Do YYYY')}</i>
					</small>
				</div>
			</article>
		</div>
	);
};

interface ChirpCardProps {
	chirp: IChirp;
	fullSize?: boolean;
}

export default ChirpCard;
