import React, { ChangeEvent, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';

export default function EmailModal() {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');

    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleEmailSubmit = async () => {
        // Close the modal
        closeModal();
    
        // Send the email to your backend
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
    
        if (response.ok) {
            // Handle success
            console.log('Email submitted successfully');
        } else {
            // Handle error
            console.error('Failed to submit email');
        }
    };

    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            onClose={closeModal}
            >
            <ModalHeader>
                <h2 id="modal-title">Subscribe for More Info</h2>
            </ModalHeader>
            <ModalBody>
                <Input
                fullWidth
                color="primary"
                size="lg"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                />
            </ModalBody>
            <ModalFooter>
                <Button  onClick={closeModal}>
                Close
                </Button>
                <Button onClick={handleEmailSubmit}>
                Subscribe
                </Button>
            </ModalFooter>
            </Modal>


    );

}