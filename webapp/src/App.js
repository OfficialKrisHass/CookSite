import { useState, useEffect } from 'react';

import './App.css';

function App() {

    const[data, setData] = useState(null);
    useEffect(() => {
        fetch("api/recipes/").then((res) => res.json()).then((res) => setData(res.msg));
    }, [])

    return (
        <div className="App">
            <p>{data === null ? "Loading..." : data }</p>
        </div>
    );

}

export default App;
