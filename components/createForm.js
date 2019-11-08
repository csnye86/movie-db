import { useState, useEffect } from 'react'

const MovieCreateForm = (props) => {
  const defaultData = {
    name: '',
    descriptionShort: '',
    rating: '',
    image: '',
    cover: '',
    description: '',
    genre: ''
  }
  const formData = props.initialData ? {...props.initialData} : defaultData
  const [form, setForm] = useState({...formData})

  console.log('form', form)

  // useEffect(() => {
  //   if(props.initialData)
  //   setForm(props.initialData)
  // }, [props.initialData])

  const handleGenreChange = (e) => {
    const {options} = e.target
    let value = []
    for (let i = 0; i < options.length; i++) {
      if(options[i].selected) {
        value.push(options[i].value)
      } 
      setForm({
        ...form,
        genre: value.toString()
      })
      
    }
  }

  const submitForm = () => {
    props.handleFormSubmit({...form})
  }

	return (
		<form>
			<div className='form-group'>
				<label htmlFor='name'>Name</label>
				<input
					value={form.name}
					type='text'
					name='name'
					className='form-control'
					aria-describedby='emailHelp'
					placeholder='Lord of the Rings'
					onChange={e =>
						setForm({
							...form,
							[e.target.name]: e.target.value
						})
					}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='description'>Short Description</label>
				<input
					value={form.descriptionShort}
					onChange={e =>
						setForm({
							...form,
							[e.target.name]: e.target.value
						})
					}
					name='descriptionShort'
					type='text'
					className='form-control'
					placeholder='Somewhere in Middle-earth...'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='description'>Rating</label>
				<input
					value={form.rating}
					onChange={e =>
						setForm({
							...form,
							[e.target.name]: e.target.value
						})
					}
					name='rating'
					type='number'
					max='5'
					min='0'
					className='form-control'
					placeholder='3'
				/>
				<small id='emailHelp' className='form-text text-muted'>
					Max: 5, Min: 0{' '}
				</small>
			</div>
			<div className='form-group'>
				<label htmlFor='image'>Image</label>
				<input
					value={form.image}
					onChange={e =>
						setForm({
							...form,
							[e.target.name]: e.target.value
						})
					}
					name='image'
					type='text'
					className='form-control'
					placeholder='http://.....'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='cover'>Cover</label>
				<input
					value={form.cover}
					onChange={e =>
						setForm({
							...form,
							[e.target.name]: e.target.value
						})
					}
					name='cover'
					type='text'
					className='form-control'
					placeholder='http://......'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='longDesc'>Long Description</label>
				<textarea
					className='form-control'
					onChange={e =>
						setForm({
							...form,
							[e.target.name]: e.target.value
						})
					}
					name='description'
					rows='3'
					value={form.description}
				></textarea>
			</div>
			<div className='form-group'>
				<label htmlFor='genre'>Genre</label>
				<select
					multiple
					className='form-control'
					name='genre'
					onChange={handleGenreChange}
				>
					<option>drama</option>
					<option>music</option>
					<option>adventure</option>
					<option>historical</option>
					<option>action</option>
				</select>
			</div>
			<button type='button' className='btn btn-primary mb-2' onClick={submitForm}>
				Add
			</button>
		</form>
	)
}

export default MovieCreateForm
