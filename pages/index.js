import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Carousel from '../components/Carousel'
import MoviesCollection from '../components/MoviesCollection'
import Footer from '../components/Footer'
import movieData from '../resources/movieData'
import GlobalContext from '../context/GlobalContext'
import {getMovies} from '../actions/index'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

const Home = (props) => {
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
		<GlobalContext.Provider value={{movieData}}>
			<div>
				<Head>
					<title>Home</title>
					<link
						rel='stylesheet'
						href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
						integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
						crossOrigin='anonymous'
					/>
					<script
						src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
						integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
						crossOrigin='anonymous'
					></script>
					<script
						src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
						integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1'
						crossOrigin='anonymous'
					></script>
					<script
						src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
						integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
						crossOrigin='anonymous'
					></script>
				</Head>
				<Nav />
				<div className='body'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3'>
								<Sidebar
									title='MoviesDB'
									clickHandler={() => {
										alert('Hello World')
									}}
								/>
							</div>
							<div className='col-lg-9'>
								<Carousel />
								<div className='row'>
                  {/* {error && <div className='alert alert-danger'>{error}</div> } */}
									<MoviesCollection movies={props.movies}/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />

				<style jsx>{`
					.body {
						margin-top: 60px;
					}
				`}</style>
			</div>
		</GlobalContext.Provider>
	)
}

Home.getInitialProps = async (props) => {
  const movies = await getMovies()
  return {
    movies
  }
}

export default Home
