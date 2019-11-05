import React from 'react'

const Sidebar = ({title, clickHandler}) => {
	return (
		<div>
			<h1 className='my-4'>{title}</h1>
			<div className='list-group'>
				<a href='#' className='list-group-item'>
					Category 1
				</a>
				<a href='#' className='list-group-item'>
					Category 2
				</a>
				<a href='#' className='list-group-item'>
					Category 3
				</a>
			</div>
		</div>
	)
}

export default Sidebar
