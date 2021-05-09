import React from 'react';


const Card = ({ imdbID, Poster, Title, Type, Year }) => {

    return (
        <div className="col">
            <div className="card h-100">
                <img
                    src={
                        Poster !== 'N/A'
                            ? Poster
                            : `https://via.placeholder.com/300x400?text=${Title}`
                    }
                    className="card-img-top"
                    alt="poster"
                />
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">
                            {Type}
                        </p>
                        <p className="card-text">
                            {Year}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;