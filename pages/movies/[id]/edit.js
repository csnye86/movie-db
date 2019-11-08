import React from 'react'
import Router from 'next/router'
import MovieCreateForm from '../../../components/createForm'
import { getMovieById, editMovie } from '../../../actions'

const EditMovie = props => {
	const handleEditMovie = movie => {
		editMovie(movie).then(res => {
			Router.push('/movies/[id]', `/movies/${movie.id}`)
		})
	}

	return (
		<div className='container'>
			<h1>Edit page</h1>
			<MovieCreateForm
				initialData={props.movie}
        handleFormSubmit={handleEditMovie}
        btnText='Update'
			/>
		</div>
	)
}

EditMovie.getInitialProps = async ({ query }) => {
	const movie = await getMovieById(query.id)
	return {
		movie
	}
}

export default EditMovie
