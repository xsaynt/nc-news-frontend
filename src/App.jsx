import { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { HomeArticles } from './HomeArticles';
import { SingleArticle } from './SingleArticle';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [articles, setArticles] = useState(null);
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<HomeArticles
							articles={articles}
							setArticles={setArticles}
							isLoading={isLoading}
							setIsLoading={setIsLoading}
						/>
					}
				/>
				<Route
					path='/:article_id'
					element={
						<SingleArticle
							articles={articles}
							setArticles={setArticles}
							comments={comments}
							setComments={setComments}
							isLoading={isLoading}
							setIsLoading={setIsLoading}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
