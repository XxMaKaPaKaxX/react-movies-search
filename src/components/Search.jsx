import React, { useState } from 'react';

const Search = () => {
    const [searchingTitle, setSearchingTitle] = useState('');

    const handleOnChangeTitle = (e) => {
        setSearchingTitle(e.target.value)
    }
    return (
        <div className="input-group my-3">
            <span className="input-group-text border-0" id="search-addon"><i className="fas fa-search"></i></span>
            <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                value={searchingTitle}
                onChange={handleOnChangeTitle}
            />
        </div>
    );
}

export default Search;