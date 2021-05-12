import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import ContentTypeSelector from '../components/ContentTypeSelector';
import Preloader from '../components/Preloader';
import Modal from '../components/Modal/Modal';


const Main = () => {

    const { searchingResult, loading } = useContext(StoreContext);
    return (
        <main className="container content">
            <Search />
            <ContentTypeSelector />
            {loading
                ? <Preloader />
                : <MoviesList />
            }
            <Modal />

        </main>
    );
}

export default Main;