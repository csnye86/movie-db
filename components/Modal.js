import React from 'react'

const Modal = () => {
  let closeBtn = null
  const submitMovie = () => {
    alert('Added')
    closeBtn.click()
  }

	return (
		<div>
			<button
				type='button'
				className='btn btn-primary'
				data-toggle='modal'
				data-target='#exampleModal'
			>
				Launch demo modal
			</button>

			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Add Movie
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>...</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
                data-dismiss='modal'
                ref={(el) => closeBtn = el}
							>
								Close
							</button>
							<button
								type='button'
								className='btn btn-primary'
								onClick={submitMovie}
							>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
