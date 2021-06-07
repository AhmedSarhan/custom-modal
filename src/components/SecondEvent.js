import React, { useState } from 'react';
import Modal from './Modal/Modal';
const SecondEvent = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<button className="btn btn-secondary" onClick={() => setShowModal(true)}>
				Open Modal 2
			</button>

			<Modal show={showModal} onClose={() => setShowModal(false)}>
				<h3>This is going to be modal like for real</h3>
				<p>This is second Modal</p>
			</Modal>
		</div>
	);
};

export default SecondEvent;
