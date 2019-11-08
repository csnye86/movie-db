import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import MovieCreateForm from '../../../components/createForm'
import {getMovieById} from '../../../actions'

const EditMovie = (props) => {

  return (
    <div className='container'>
      <h1>Edit page</h1>
      <MovieCreateForm initialData = {props.movie}/>
    </div>
  )
}

EditMovie.getInitialProps = async ({query}) => {
  const movie = await getMovieById(query.id)
  return {
    movie
  }
}

export default EditMovie
