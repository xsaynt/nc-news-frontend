import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<h1>
				<Link to={`/`}>NC News</Link>
			</h1>
		</header>
	);
};
