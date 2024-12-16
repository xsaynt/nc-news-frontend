import { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { HomeArticles } from './HomeArticles';
import { SingleArticle } from './SingleArticle';

function App() {
	const [articles, setArticles] = useState([]);
	return (
		<div>
			<Header />
			<HomeArticles articles={articles} setArticles={setArticles} />
		</div>
	);
}

export default App;
