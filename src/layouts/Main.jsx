import React, { useContext } from 'react';
import MoviesList from '../components/MoviesList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import { StoreContext } from '../store/StoreProvider';


const Main = () => {

    const { searchingResult } = useContext(StoreContext)
    console.log(searchingResult)
    return (
        <main className="container content">
            <Search />
            {searchingResult.length !== 0
                ? <MoviesList />
                : <Preloader />
            }
        </main>
    );
}

export default Main;