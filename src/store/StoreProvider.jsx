import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext({});

const API_KEY = process.env.REACT_APP_API_KEY;

const StoreProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [typeContent, setTypeContent] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [searchingUrl, setSearchingUrl] = useState(`https://www.omdbapi.com/?apikey=${API_KEY}&type=${typeContent}&page=${currentPage}&s=${title}`);
    const [searchingResult, setSearchingResult] = useState([]);
    const [totalResults, setTotalResults] = useState();
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState();

    useEffect(() => {
        setSearchingUrl(`https://www.omdbapi.com/?apikey=${API_KEY}&type=${typeContent}&page=${currentPage}&s=${title}`)

    }, [typeContent, currentPage, title, searchingUrl])

    useEffect(() => {
        fetchData(searchingUrl);
    }, [searchingUrl])

    const fetchData = async (url) => {
        try {
            setLoading(true)
            const response = await fetch(url);
            const data = await response.json();
            const { Search, totalResults } = data;
            setSearchingResult(Search);
            setTotalResults(totalResults ? totalResults : 0);
            setLoading(false);
        }

        catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    return (
        <StoreContext.Provider value={{
            searchingUrl,
            setSearchingUrl,
            searchingResult,
            setSearchingResult,
            totalResults,
            setTotalResults,
            fetchData,
            typeContent,
            setTypeContent,
            loading,
            isModalOpen,
            setIsModalOpen,
            selectedItemId,
            setSelectedItemId,
            currentPage,
            setCurrentPage,
            setTitle

        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;

