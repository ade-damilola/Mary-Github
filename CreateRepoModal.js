// CreateRepoModal.js

import React, { useState } from 'react';
import axios from 'axios';

const CreateRepoModal = ({ closeModal }) => {
    const [repoName, setRepoName] = useState('');
    const [repoDescription, setRepoDescription] = useState('');

    const createRepository = async () => {
        try {
            await axios.post('https://api.github.com/user/repos', {
                name: repoName,
                description: repoDescription
            });
            closeModal();
        } catch (error) {
            console.error('Error creating repository:', error);
        }
    };

    return (
        <div>
            <h2>Create New Repository</h2>
            <label>Repository Name:</label>
            <input type="text" value={repoName} onChange={(e) => setRepoName(e.target.value)} />
            <label>Repository Description:</label>
            <input type="text" value={repoDescription} onChange={(e) => setRepoDescription(e.target.value)} />
            <button onClick={createRepository}>Create Repository</button>
        </div>
    );
};

export default CreateRepoModal;

