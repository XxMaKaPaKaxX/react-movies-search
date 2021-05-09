import React from 'react';
import Card from './Card';

const MoviesList = ({ movies }) => {

    const moviesElements = movies.map(item => <Card key={item.imdbID} {...item} />)
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