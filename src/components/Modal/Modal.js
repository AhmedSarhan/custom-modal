import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './modal.module.css';

const Modal = ({
	show,
	onClose,
	backdropStyles,
	modalStyles,
	children,
	innerClose,
}) => {
	const modalRef = useRef();
	useEffect(() => {
		//  add when mounted
		document.addEventListener('mousedown', handleClick);
		//  clean on unmount
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);
	const handleClick = useCallback((e) => {
		// clicked inside the modal
		if (modalRef?.current?.contains(e.target)) {
			return;
		}
		// outside the modal
		onClose();
	}, []);

	const backDrop = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};
	const modal = {
		initial: {
			opacity: 0,
			scale: 0.25,
		},
		current: {
			opacity: 1,
			scale: 1,
			transform: { delay: 1 },
			transition: { duration: 0.6 },
		},
		exit: {
			opacity: 0,
			scale: 0,
		},
	};

	return (
		<AnimatePresence exitBeforeEnter>
			{show && (
				<motion.div
					variants={backDrop}
					initial="hidden"
					animate="visible"
					exit="hidden"
					className={styles.backdrop}
					style={{ ...backdropStyles }}
				>
					<motion.div
						className={styles.modal}
						ref={modalRef}
						style={{ ...modalStyles }}
						variants={modal}
						initial="initial"
						animate="current"
						exit="exit"
					>
						<div className={styles.modalContent}>
							{innerClose && (
								<button className={styles.closeBtn} onClick={onClose}>
									&times;
								</button>
							)}
							{children}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	backdropStyles: PropTypes.object,
	modalStyles: PropTypes.object,
	innerClose: PropTypes.bool,
};

export default Modal;
