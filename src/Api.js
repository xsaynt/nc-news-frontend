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
			console.log(err);
		});
};

export const articleComments = (article_id) => {
	return articleApi
		.get(`/api/articles/${article_id}/comments`)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const updateArticleVotes = (article_id, inc_votes) => {
	return articleApi
		.patch(`/api/articles/${article_id}`, { inc_votes })
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const postNewComment = (article_id, comment) => {
	return articleApi
		.post(`/api/articles/${article_id}/comments`, comment)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
};
