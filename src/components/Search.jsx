import React, { useContext, useState } from 'react';
import { StoreContext } from '../store/StoreProvider';

const Search = () => {

    const [searchingTitle, setSearchingTitle] = useState('');
    const { setTitle, setCurrentPage } = useContext(StoreContext);

    const handleOnChangeTitle = (e) => {
        setSearchingTitle(e.target.value);
    };

    const handleSearchbyEnter = (e) => {
        if (e.key === 'Enter') {
            setTitle(searchingTitle);
            setCurrentPage(1);
        }
    };
    const handleOnSearchClick = () => {
        setTitle(searchingTitle);
        setCurrentPage(1);
    }

    return (
        <div className="input-group my-3">
            <span className="input-group-text border-0" id="search-addon"><i className="fas fa-search"></i></span>
            <input
                type="search"
                className="form-control rounded"
                placeholder="Enter the title..."
                aria-label="Search"
                aria-describedby="search-addon"
                value={searchingTitle}
                onChange={handleOnChangeTitle}
                onKeyDown={handleSearchbyEnter}
            />
            <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleOnSearchClick}
            >
                Search
            </button>
        </div>
    );
}

export default Search;