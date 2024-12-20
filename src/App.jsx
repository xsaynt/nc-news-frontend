import { useEffect } from 'react';
import './App.css';
import { Header } from './Header';
import { HomeArticles } from './HomeArticles';
import { SingleArticle } from './SingleArticle';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/articles');
	}, [navigate]);

	return (
		<div>
			<Header />
			<Routes>
				<Route path='/articles' element={<HomeArticles />} />
				<Route path='/articles/:article_id' element={<SingleArticle />} />
				<Route path='/topics/:slug' element={<HomeArticles />} />
			</Routes>
		</div>
	);
}

export default App;
