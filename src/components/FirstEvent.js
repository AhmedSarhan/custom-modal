import React, { useState } from 'react';
import Modal from './Modal/Modal';

const FirstEvent = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<button className="btn btn-primary" onClick={() => setShowModal(true)}>
				Open Modal 1
			</button>

			<Modal show={showModal} onClose={() => setShowModal(false)}>
				<p>This is first Modal</p>
			</Modal>
		</div>
	);
};

export default FirstEvent;
