import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
    const [images, setImages] = useState([]);

    //defined a callback (handleSubmit) in the parent (App.js)
    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        setImages(result);
    };

    return <div>
        {/* Pass down the callback handleSubmit to the child SearchBar.js
        through the prop system with a key onSubmit and value handleSubmit
        (the props format is key: value pairs). When the event occurs (user
        clicks button to submit) within the child (SearchBar) we then invoke/ call
        the callback (handleSubmit). Within this callback function we can pass in 
        any data (as an argument ...in this case "term" correlating to whatever 
        the user enters into the search bar as a search request. The data will
        eventually show back up in the parent (App.js). We defined SearchBar above
        and now we will render it through < /> */}
        <SearchBar onSubmit={handleSubmit} /> 
        <ImageList images={images} />
    </div>
}

export default App;