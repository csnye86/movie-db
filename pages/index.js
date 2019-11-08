import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Carousel from '../components/Carousel'
import MoviesCollection from '../components/MoviesCollection'
import movieData from '../resources/movieData'
import GlobalContext from '../context/GlobalContext'
import { getMovies, getGenres } from '../actions/index'

const Home = ({ images, movies, genres }) => {
	const [filter, setFilter] = useState('All')

	const changeGenre = genre => {
		setFilter(genre)
	}

	const filterMovies = movies => {
    if (filter === 'All') return movies
    else return movies.filter(m => m.genre && m.genre.includes(filter))
	}


	return (
		<GlobalContext.Provider value={{ movieData }}>
			<div>
				<div className='body'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3'>
								<Sidebar
									title='MoviesDB'
									genres={genres}
									changeGenre={changeGenre}
									activeGenre={filter}
								/>
							</div>
							<div className='col-lg-9'>
								<Carousel images={images || []} />
								<h1 className='mb-2'>Showing: {filter || 'All'}</h1>
								<div className='row'>
									<MoviesCollection movies={filterMovies(movies) || []} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</GlobalContext.Provider>
	)
}

Home.getInitialProps = async props => {
	const movies = await getMovies()
	const images = await movies.map(m => {
		return {
			id: `image-${m.id}`,
			url: m.cover,
			movieTitle: m.name
		}
	})
	const genres = await getGenres()
	return {
		movies,
		images,
		genres
	}
}

export default Home
