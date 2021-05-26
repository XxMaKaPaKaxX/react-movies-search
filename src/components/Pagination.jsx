import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';


const Pagination = () => {

    const { currentPage, setCurrentPage, totalResults } = useContext(StoreContext);

    const topScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const handlePrevPage = () => {
        setCurrentPage(prev => prev - 1)
        topScroll();
    }

    const handleNextPage = () => {
        setCurrentPage(prev => prev + 1);
        topScroll();
    }

    return (
        <div className="d-flex py-2 justify-content-between">
            <p>Amount records: {totalResults}</p>
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className="btn btn-light btn-pagination"
                    onClick={handlePrevPage}
                    disabled={currentPage < 2}
                >
                    <i className="fas fa-angle-left mx-2"></i>
                    prev.

                </button>
                <button
                    type="button"
                    className="btn btn-light btn-pagination"
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(totalResults / 10)}

                >
                    next
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Pagination;