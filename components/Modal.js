import React from 'react'

// const Modal = props => {
// 	let closeBtn = null
// 	const submitMovie = () => {
// 		alert('Added')
// 		closeBtn.click()
// 	}

// 	return (
// 		<div>
// 			<button
// 				type='button'
// 				className='btn btn-primary'
// 				data-toggle='modal'
// 				data-target='#exampleModal'
// 			>
// 				Launch demo modal
// 			</button>

// 			<div
// 				className='modal fade'
// 				id='exampleModal'
// 				tabIndex='-1'
// 				role='dialog'
// 				aria-labelledby='exampleModalLabel'
// 				aria-hidden='true'
// 			>
// 				<div className='modal-dialog' role='document'>
// 					<div className='modal-content'>
// 						<div className='modal-header'>
// 							<h5 className='modal-title' id='exampleModalLabel'>
// 								Add Movie
// 							</h5>
// 							<button
// 								type='button'
// 								className='close'
// 								data-dismiss='modal'
// 								aria-label='Close'
// 							>
// 								<span aria-hidden='true'>&times;</span>
// 							</button>
// 						</div>
// 						<div className='modal-body'>{props.children}</div>
// 						<div className='modal-footer'>
// 							<button
// 								type='button'
// 								className='btn btn-secondary'
// 								data-dismiss='modal'
// 								ref={el => (closeBtn = el)}
// 							>
// 								Close
// 							</button>
// 							{props.hasSubmit ? (
// 								<button
// 									type='button'
// 									className='btn btn-primary'
// 									onClick={() => alert()}
// 								>
// 									Add
// 								</button>
// 							) : null}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Modal

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.closeBtn = null
	}

	closeModal = () => {
		this.closeBtn.click()
	}

	submitMovie = () => {
		alert('Added')
		this.closeModal()
	}

	render() {
		return (
			<div>
				<button
					type='button'
					className='btn btn-primary mb-4'
					data-toggle='modal'
					data-target='#exampleModal'
				>
					Add Movie
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
							<div className='modal-body'>{this.props.children}</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-dismiss='modal'
									ref={el => (this.closeBtn = el)}
								>
									Close
								</button>
								{this.props.hasSubmit && (
									<button
										type='button'
										className='btn btn-primary'
										onClick={this.submitMovie}
									>
										Add
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal
