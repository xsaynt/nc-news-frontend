import './App.css';
import { Header } from './Header';
import { HomeArticles } from './HomeArticles';
import { SingleArticle } from './SingleArticle';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/articles' element={<HomeArticles />} />
				<Route path='articles/:article_id' element={<SingleArticle />} />
				<Route path='/topics/:slug' element={<HomeArticles />} />
				<Route
					path='/articles?sort_by=:value&order=:asc/desc'
					element={<HomeArticles />}
				/>
			</Routes>
		</div>
	);
}

export default App;
