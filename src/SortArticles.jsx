import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SortArticles = ({
	setSelectedSort,
	setSelectedOrder,
	defaultSort,
	defaultOrder,
}) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [sort_by, setSortBy] = useState(defaultSort);
	const [order, setOrder] = useState(defaultOrder);

	useEffect(() => {
		setSelectedSort(sort_by);
		setSelectedOrder(order);
	}, [sort_by, order]);

	const handleSortChange = (e) => {
		const value = e.target.value;
		setSortBy(value);
		setSelectedSort(value);
		searchParams.set('sort_by', value);
		setSearchParams(searchParams);
	};

	const handleOrderChange = (e) => {
		const value = e.target.value;
		setOrder(value);
		setSelectedOrder(value);
		searchParams.set('order', value);
		setSearchParams(searchParams);
	};

	return (
		<div className='wrap'>
			<label className='home-dropdown'>
				<span className='decor'>Sort By</span>
				<select name='sort_by' value={sort_by} onChange={handleSortChange}>
					<option value='created_at'>Upload Date (Default)</option>
					<option value='title'>Title</option>
					<option value='author'>Author</option>
					<option value='votes'>Votes</option>
				</select>
			</label>
			<label className='home-dropdown'>
				<span className='decor'>Order</span>
				<select name='order' value={order} onChange={handleOrderChange}>
					<option value='desc'>Descending (Default)</option>
					<option value='asc'>Ascending</option>
				</select>
			</label>
		</div>
	);
};
