import React from 'react'

const Carousel = ({ images }) => {
	return (
		<div>
			<div
				id='carouselExampleIndicators'
				className='carousel slide my-4'
				data-ride='carousel'
			>
				<ol className='carousel-indicators'>
					{images.map((image, i) => {
						return (
							<li
								key={image + i}
								data-target='#carouselExampleIndicators'
								data-slide-to={image.id}
								className={i === 0 ? 'active' : null}
							></li>
						)
					})}
				</ol>
				<div className='carousel-inner' role='listbox'>
					{images.map((image, i) => {
						return (
							<div className={`carousel-item ${i === 0 ? 'active' : null}`} key={image + i}>
								<img
									className='d-block img-fluid'
									src={image.url}
									alt={image.movieTitle}
								/>
							</div>
						)
					})}
				</div>
				<a
					className='carousel-control-prev'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='prev'
				>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					></span>
					<span className='sr-only'>Previous</span>
				</a>
				<a
					className='carousel-control-next'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='next'
				>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					></span>
					<span className='sr-only'>Next</span>
				</a>
			</div>

      <style jsx>{`
        .carousel-item {
          max-height: 400px;
        }
        `}</style>
		</div>
	)
}

export default Carousel
