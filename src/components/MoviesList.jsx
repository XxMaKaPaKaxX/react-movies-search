import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import Card from './Card';

const MoviesList = () => {

    const { searchingResult = [] } = useContext(StoreContext)

    const moviesElements = searchingResult.map((item, index) => <Card key={`${item.imdbID}${index}}`} {...item} />)
    return (
        <section className="row row-cols-2 row-cols-md-4 g-4 my-2">
            {searchingResult.length !== 0
                ? moviesElements
                : <h4>Nothing found</h4>
            }
        </section>
    );
}

export default MoviesList;