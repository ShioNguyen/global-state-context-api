import React, { useContext } from 'react';
import {AppContext} from '../context/AppProvider';

const Read = () => {

    const {read} = useContext(AppContext);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {read.map((book) => {
            return (
                <div style={{width: '200px', height: 'auto', margin: '10px', border: '1px solid black'}}>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt='title'/>
                    <p>{book.volumeInfo.title}</p>
                </div>
            )
        })}
    </div>
    );
}

export default Read;
