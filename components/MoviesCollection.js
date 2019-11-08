import React from 'react'
import Link from 'next/link'

const MoviesCollection = ({ movies }) => {
	const shorten = text => {
		if (text && text.length > 200) return text.substr(0, 200) + ' ...'
		return text
  }

	return (
		<>
			{movies.map((movie, i) => (
				<div className='col-lg-4 col-md-6 mb-4' key={(movie, i)}>
					<div className='card h-100'>
						<Link href='/movies/[id]' as={`/movies/${movie.id}`}>
							<a>
								<img className='card-img-top' src={movie.image} alt='' />
							</a>
						</Link>
						<div className='card-body'>
							<h4 className='card-title'>
								<Link href='/movies/[id]' as={`/movies/${movie.id}`}>
									<a>{movie.name}</a>
								</Link>
							</h4>
              <p className='genre'>{movie.genre}</p>
							<p className='card-text'>{shorten(movie.descriptionShort)}</p>
						</div>
						<div className='card-footer'>
							<small className='text-muted'>{movie.rating}</small>
						</div>
					</div>

          <style jsx>{`
            .card-img-top {
              max-height: 127px;
              object-fit: cover;
            }
          `}</style>
				</div>
			))}
		</>
	)
}

export default MoviesCollection
