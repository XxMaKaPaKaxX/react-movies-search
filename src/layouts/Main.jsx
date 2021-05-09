import React, { useEffect, useState } from 'react';
import MoviesList from '../components/MoviesList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const Main = () => {
    const url = `http://www.omdbapi.com/?apikey=76cc608b&s=matrix`;

    const [searchingResult, setSearchingResult] = useState([]);
    const [totalResults, setTotalResults] = useState();

    const fetchData = async () => {
        const response = await fetch(url);
        const { Search, totalResults } = await response.json();
        setSearchingResult(Search);
        setTotalResults(totalResults);
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(searchingResult)

    return (
        <main className="container content">
            <Search />
            { searchingResult.length === 0
                ? <Preloader />
                : <MoviesList movies={searchingResult} />
            }

        </main>
    );
}

export default Main;