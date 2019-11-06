import React from 'react'
import Modal from './Modal'

const Sidebar = props => {
  const {title, genres} = props
	return (
		<div>
      <Modal />
			<h1 className='my-4'>{title}</h1>
			<div className='list-group'>
        {
          genres.map((genre, i) => {
            return <a href='#' className='list-group-item' key={genre + i}>{genre.name}</a>
          })
        }
			</div>
		</div>
	)
}

export default Sidebar
