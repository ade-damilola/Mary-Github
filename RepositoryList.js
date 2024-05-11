// RepositoryList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepositoryList = () => {
    const [repositories, setRepositories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        fetchRepositories();
    }, [currentPage, searchTerm]);

    const fetchRepositories = async () => {
        try {
            const response = await axios.get(`https://api.github.com/user/repos?page=${currentPage}&per_page=${perPage}`);
            setRepositories(response.data);
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    };

    const handleSearch = () => {
        setCurrentPage(1);
        fetchRepositories();
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h2>Repository List</h2>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search repositories" />
            <button onClick={handleSearch}>Search</button>
            <ul>
            {repositories.map(repo => (
                    <li key={repo.id}>
                        <Link to={`/repository/${repo.name}`}>{repo.name}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
    );
};




export default RepositoryList;


   




