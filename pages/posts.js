import React from 'react'
import { getPosts } from '../actions'

const Posts = ({ posts }) => {
	return (
		<div className='container'>
			<h1>Posts Page</h1>
			<ul>
				{posts.map((p, i) => <li key={p + i}>{p.title}</li>)}
			</ul>
		</div>
	)
}

Posts.getInitialProps = async props => {
	const posts = await getPosts()

	return {
		posts
	}
}

export default Posts
