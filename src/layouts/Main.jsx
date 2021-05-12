import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import ContentTypeSelector from '../components/ContentTypeSelector';
import Preloader from '../components/Preloader';


const Main = () => {


    const { searchingResult, loading } = useContext(StoreContext);
    console.log(loading)
    console.log(searchingResult)
    return (
        <main className="container content">
            <Search />
            <ContentTypeSelector />
            {loading
                ? <Preloader />
                : <MoviesList />
            }

        </main>
    );
}

export default Main;