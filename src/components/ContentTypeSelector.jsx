import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';

const ContentTypeSelector = () => {
    const { typeContent, setTypeContent } = useContext(StoreContext);

    const handleOnRadioChange = (e) => {
        const { value } = e.target;
        setTypeContent(value);
    }

    return (
        <section className="d-flex justify-content-around">
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value=""
                    onChange={handleOnRadioChange}
                    checked={typeContent === ''}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">All</label>

            </div>

            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="movie"
                    onChange={handleOnRadioChange}
                    checked={typeContent === 'movie'}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">Movies only</label>
            </div>

            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="series"
                    onChange={handleOnRadioChange}
                    checked={typeContent === 'series'}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">Series only</label>
            </div>
        </section>
    );
}

export default ContentTypeSelector;