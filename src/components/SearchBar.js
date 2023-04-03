function SearchBar() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('I need to tell the parent about some data');
    };
    
    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input />
        </form>
    </div>
    );
}

export default SearchBar;