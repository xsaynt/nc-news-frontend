import { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { HomeArticles } from './HomeArticles';
import { SingleArticle } from './SingleArticle';
import { Routes, Route } from 'react-router-dom';
import { ArticleComments } from './ArticleComments';

function App() {
	const [articles, setArticles] = useState(null);
	return (
		<div>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<HomeArticles articles={articles} setArticles={setArticles} />
					}
				/>
				<Route
					path='/:article_id'
					element={
						<SingleArticle articles={articles} setArticles={setArticles} />
					}
				/>
				<Route
					path='/:article_id/comments'
					element={
						<ArticleComments articles={articles} setArticles={setArticles} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
