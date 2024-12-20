import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const RedirectArticles = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/' && !location.search) {
			navigate('/articles');
		}
	}, [location, navigate]);
};
