import React from 'react'
import {useRouter} from 'next/router'
import Modal from './Modal'
import MovieCreateForm from '../components/createForm'
import { addMovie } from '../actions'

const Sidebar = props => {
  const { title, genres } = props
  const router = useRouter()
	let modal = null

	const handleAddMovie = movie => {
		addMovie(movie).then(res => {
      modal.closeModal()
      router.push('/')
		})
	}

	return (
		<div>
			<h1 className='my-4'>{title}</h1>
			<Modal ref={el => (modal = el)} hasSubmit={false}>
				<MovieCreateForm handleFormSubmit={handleAddMovie} />
			</Modal>
			<div className='list-group'>
				{genres.map((genre, i) => {
					return (
						<a href='#' className='list-group-item' key={genre + i}>
							{genre.name}
						</a>
					)
				})}
			</div>
		</div>
	)
}

export default Sidebar
