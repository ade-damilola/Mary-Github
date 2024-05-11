// RepositoryDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepositoryDetails = ({ match }) => {
    const [repository, setRepository] = useState(null);
    const repoName = match.params.repoName;

    useEffect(() => {
        fetchRepository();
    }, []);

    const fetchRepository = async () => {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repoName}`);
            setRepository(response.data);
        } catch (error) {
            console.error('Error fetching repository details:', error);
        }
    };

    if (!repository) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Repository Details</h2>
            <p>Name: {repository.name}</p>
            <p>Description: {repository.description}</p>
            <p>Language: {repository.language}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default RepositoryDetails;
