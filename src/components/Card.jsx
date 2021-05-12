import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';

const Card = ({ imdbID, Poster, Title, Type, Year }) => {

    const { setIsModalOpen, setSelectedItemId } = useContext(StoreContext);

    const showModal = () => {
        setIsModalOpen(true);
        setSelectedItemId(imdbID);
    }

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
                <div className="card-footer text-muted d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-success" data-mdb-ripple-color="dark" onClick={showModal}>
                        see details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;