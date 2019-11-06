import React from 'react'
import { useRouter } from 'next/router'
import { getMovieById } from '../../actions/index'

const Movie = (props) => {
	const router = useRouter()
	const { id, name } = router.query
  const { movie } = props
	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-4'>{movie.name}</h1>
				<p className='lead'>
					{movie.descriptionShort}
				</p>
				<hr className='my-4' />
				<p>
					{movie.genre.toUpperCase()}
				</p>
				<a className='btn btn-primary btn-lg' href='#' role='button'>
					Learn more
				</a>
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

Movie.getInitialProps = async (context) => {
  const {id} = context.query
  console.log('id', id)
  const movie = await getMovieById(Number(id))
	return {
		movie
	}
}

export default Movie
