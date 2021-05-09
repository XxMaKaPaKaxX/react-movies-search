import React from 'react';

const Preloader = () => {
    return (
        <div className="d-flex justify-content-center my-4">
            <button className="btn btn-success" type="button" disabled>
                <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                ></span>
                Loading...
            </button>
        </div>
    );
}

export default Preloader;