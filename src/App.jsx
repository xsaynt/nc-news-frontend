import './App.css';
import { Header } from './Header';
import { HomeArticles } from './HomeArticles';
import { SingleArticle } from './SingleArticle';
import { Routes, Route } from 'react-router-dom';
import { RedirectArticles } from './RedirectArticles';

function App() {
	RedirectArticles();
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
