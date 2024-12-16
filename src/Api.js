import axios from 'axios';

const articleApi = axios.create({
	baseURL: 'https://my-nc-news-yn9b.onrender.com',
});
export const allArticles = () => {
	return articleApi
		.get('/api/articles')
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		});
};

export const oneArticle = (article_id) => {
	return articleApi
		.get(`/api/articles/${article_id}`)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		});
};
