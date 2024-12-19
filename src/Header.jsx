import { Link } from 'react-router-dom';
import ncLogo from '../ncLogo.png';

export const Header = () => {
	return (
		<header>
			<section className='user-profile'>
				<h1>
					<Link to={`/articles`}>NC News</Link>
				</h1>
				<img src={ncLogo} alt='Northcoders Logo' className='website-logo' />
			</section>
			<p className='username'>cooljmessy</p>
		</header>
	);
};
