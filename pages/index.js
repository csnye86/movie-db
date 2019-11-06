import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Carousel from '../components/Carousel'
import MoviesCollection from '../components/MoviesCollection'
import movieData from '../resources/movieData'
import GlobalContext from '../context/GlobalContext'
import { getMovies, getGenres } from '../actions/index'

const Home = ({ images, movies, genres }) => {
	// const [movies, setMovies] = useState([])
	// const [error, setError] = useState('')

	// DIFFERENT WAYS OF RETRIEVING MOVIE DATA ARE SHOWN - EG. GLOBALCONTEXT, RETRIEVING 'ASYNC' DATA FROM /ACTIONS/INDEX.JS AS WELL AS TWO DIFFERENT USEEFFECTS WHICH DO THE SAME THING. ALL CLIENT-SIDE

	// useEffect(() => {
	//   getMovies()
	//   .then(res => {
	//     setMovies(res)
	//   })
	//   .catch(err => {
	//     setError(err)
	//   })
	// }, [])

	// OR BELOW. THEY ARE THE SAME

	// useEffect(() => {
	//   const fetchData = async () => {
	//     setMovies(await getMovies())
	//   }
	//   fetchData()
	// }, [])

	return (
		<GlobalContext.Provider value={{ movieData }}>
			<div>
				<div className='body'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3'>
								<Sidebar title='MoviesDB' genres={genres}/>
							</div>
							<div className='col-lg-9'>
								<Carousel images={images || []} />
								<div className='row'>
									{/* {error && <div className='alert alert-danger'>{error}</div> } */}
									<MoviesCollection movies={movies || []} />
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
