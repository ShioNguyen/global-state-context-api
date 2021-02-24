import React, { useContext } from 'react';
import {AppContext} from '../context/AppProvider';

const ResultCard = ({book}) => {

    const {
        addBookToReadlist,
        addBookToRead,
    } = useContext(AppContext);

    return (
        <div style={{width: '200px', height: 'auto', margin: '10px', border: '1px solid black'}}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt='title'/>
            <p>{book.volumeInfo.title}</p>
            <div>
                <button onClick={() => addBookToReadlist(book)}>Readlist</button>
                <button onClick={() => addBookToRead(book)}>Read</button>
            </div>
        </div>
    );
}

export default ResultCard;
