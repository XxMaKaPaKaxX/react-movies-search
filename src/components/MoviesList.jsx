import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import Card from './Card';
import Pagination from './Pagination';

const MoviesList = () => {

    const { searchingResult = [], totalResults } = useContext(StoreContext)

    const moviesElements = searchingResult.map((item, index) => <Card key={`${item.imdbID}${index}}`} {...item} />)
    return (
        <section>
            <section className="row row-cols-2 row-cols-md-4 g-4 my-2">
                {searchingResult.length !== 0
                    ? moviesElements
                    : <h4>Nothing found</h4>
                }
            </section>
            {(totalResults || totalResults !== 0) && <Pagination />}
        </section>
    );
}

export default MoviesList;