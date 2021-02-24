import React, { useEffect, useState } from 'react';
import ResultCard from './ResultCard';

const Add = () => {

    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const handleOnChange = (event) => {
        setQuery(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.items);
            })
    }

    useEffect(() => console.log(books))
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input 
                    type='text'
                    onChange={(event) => handleOnChange(event)}
                />
                <button>Search</button>
            </form>
            {books.length > 0 && (
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {books.map((book) => {
                        return (
                            <div key={book.id}>
                                <ResultCard book={book}/>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}

export default Add;
