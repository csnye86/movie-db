import axios from 'axios'

const MOVIE_DATA = []

const GENRE_DATA = [
  {
    id: 1,
    name: 'All'
  },
	{
		id: 2,
		name: 'Drama'
	},
	{
		id: 3,
		name: 'Action'
	},
	{
		id: 4,
		name: 'Adventure'
	},
	{
		id: 5,
		name: 'Historical'
  },
  {
    id: 6,
    name: 'Music'
  }
]

const API_URL = 'http://localhost:3000'

export const getMovies = () => {
	return axios.get(`${API_URL}/api/v1/movies`).then(res => res.data)
}

export const getMovieById = id => {
	return axios.get(`${API_URL}/api/v1/movies/${id}`).then(res => res.data)
}

export const getGenres = () => {
	return new Promise((resolve, reject) => {
		resolve(GENRE_DATA)
	})
}

export const addMovie = movie => {
	movie.id = Math.random()
		.toString(36)
		.substr(2, 2)
	return axios.post(`${API_URL}/api/v1/movies`, movie).then(res => res.data)
}

export const deleteMovie = id => {
	return axios.delete(`${API_URL}/api/v1/movies/${id}`).then(res => res.data)
}

export const editMovie = movie => {
	return axios
		.patch(`${API_URL}/api/v1/movies/${movie.id}`, movie)
		.then(res => res.data)
}

export const getPosts = () => {
  return axios
    .get(`${API_URL}/api/v1/posts`)
    .then(res => res.data)
}
