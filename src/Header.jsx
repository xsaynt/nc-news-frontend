import { Link } from 'react-router-dom';
import ncLogo from '../ncLogo.png';
import usernameLogo from '../usernameLogo.jpg';

export const Header = () => {
	return (
		<header>
			<section className='website-logo-name'>
				<img src={ncLogo} alt='Northcoders Logo' className='website-logo' />
				<h1>
					<Link to={`/articles`}>NC News</Link>
				</h1>
			</section>
			<section className='user-profile'>
				<img src={usernameLogo} alt='Username Logo' className='username-logo' />
				<p className='username'>cooljmessy</p>
			</section>
		</header>
	);
};
