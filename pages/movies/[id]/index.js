import React from 'react'
import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../../actions'

const Movie = props => {
	const router = useRouter()
	const { id, name } = router.query
  const { movie } = props
  
  console.log('props', props)

	const handleDeleteMovie = id => {
		deleteMovie(id).then(() => {
			router.push('/')
		})
	}

	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>{movie.descriptionShort}</p>
				<hr className='my-4' />
				<p>{movie.genre}</p>
				<button
					className='btn btn-warning btn-lg ml-1'
					href='#'
					role='button'
					onClick={() => router.push(`/movies/${id}/edit`)}
				>
					Edit
				</button>
				<button
					className='btn btn-danger btn-lg ml-1'
					href='#'
					role='button'
					onClick={() => handleDeleteMovie(id)}
				>
					Delete
				</button>
			</div>
			<p className='description-text'>{movie.description}</p>

			<style jsx>{`
				.description-text {
					font-size: 20px;
				}
			`}</style>
		</div>
	)
}

Movie.getInitialProps = async context => {
	const { id } = context.query
	const movie = await getMovieById(Number(id))
	return {
		movie
	}
}

export default Movie
