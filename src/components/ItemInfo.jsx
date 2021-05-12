import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../store/StoreProvider';
import Preloader from './Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

const ItemInfo = ({ handleOnClose }) => {
    const { selectedItemId } = useContext(StoreContext);

    const [itemData, setItemData] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const getInfo = async () => {
        setIsLoading(true)
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedItemId}`);
        const data = await response.json();
        setItemData(data);
        setIsLoading(false)
    }

    useEffect(() => {
        getInfo()
    }, [selectedItemId])

    const { Actors, Country, Director, Language, Plot, Title, } = itemData;

    return (
        <section className="d-flex flex-column">
            <button
                className="btn btn-danger btn-rounded align-self-end"
                onClick={handleOnClose}
            >
                close
                </button>
            {
                isLoading
                    ? <Preloader />
                    : <div className="d-flex flex-column">
                        <p>Title: {Title}</p>
                        <p>Actors: {Actors}</p>
                        <p>Director: {Director}</p>
                        <p>Country: {Country}</p>
                        <p>Language: {Language}</p>
                        <p>Plot: {Plot}</p>
                    </div>
            }
        </section>
    );
};

export default ItemInfo;