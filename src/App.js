import React from 'react';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

import { Provider } from './store/Provider';

export default function App() {
    return (
        <Provider>
            <div className='App'>
                <Navbar/>
                <Todos/>
            </div>
        </Provider>
    );
}
