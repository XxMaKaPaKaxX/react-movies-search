import React, { useContext } from 'react';
import Card from './Card';
import { StoreContext } from '../store/StoreProvider';


const MoviesList = () => {

    const { searchingResult } = useContext(StoreContext)

    const moviesElements = searchingResult.map(item => <Card key={item.imdbID} {...item} />)
    return (
        <section className="row row-cols-2 row-cols-md-4 g-4 my-2">
            {moviesElements}
        </section>

    );

    /* else {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    } */

}

export default MoviesList;