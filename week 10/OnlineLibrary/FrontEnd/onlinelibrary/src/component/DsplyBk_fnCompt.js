import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DisplayData from './DisplayData';

export default function FncDisplayBooks() {
    const [Books, setBooks] = useState([]);
    const url = "http://localhost:5000/allbooks";

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.error("An error has occurred:", err); // Improved error message
            });
    }, []); // Dependency array ensures the effect runs only once on mount

    return (
        <div>
            <DisplayData Books={Books} />
        </div>
    )
}