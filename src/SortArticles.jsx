// import { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';

// export const SortArticles = (
// 	articles,
// 	setArticles,
// 	isLoading,
// 	setIsLoading,
// 	setSelectedSort
// ) => {
// 	const [searchParams, setSearchParams] = useSearchParams();
// 	const sortByQuery = searchParams.get('sort_by');
// 	const orderQuery = searchParams.get('order');

// 	const setSortOrder = (direction) => {
// 		const newParams = new URLSearchParams(searchParams);
// 		newParams.set('order', direction);
// 		setSearchParams(newParams);
// 	};

// 	useEffect(() => {
// 		setIsLoading(true);
// 	});

// 	return (
// 		<div>
// 			<select onChange={handleChange}>
// 				<option value=''>Sort By</option>
// 				{articles.map((sort) => {
// 					return (
// 						<option key={sort} value={sort}>
// 							{sort}
// 						</option>
// 					);
// 				})}
// 			</select>
// 		</div>
// 	);
// };
