import { useSearchParams } from 'react-router-dom';

export const SortArticles = (
	articles,
	setArticles,
	isLoading,
	setIsLoading,
	setSelectedSort
) => {
	// const handleChange = (e) => {
	// 	const sortValue = e.target.value;
	// 	setSelectedSort(sortValue);
	// 	if (sortValue) {
	// 		navigate(`/articles?sort_by=${sortValue}&order=:asc/desc`);
	// 	} else {
	// 		navigate('/articles');
	// 	}
	// };
	// return (
	// 	<div>
	// 		<select onChange={handleChange}>
	// 			<option value=''>Sort By</option>
	// 			{articles.map((sort) => {
	// 				return (
	// 					<option key={sort} value={sort}>
	// 						{sort}
	// 					</option>
	// 				);
	// 			})}
	// 		</select>
	// 	</div>
	// );
};
