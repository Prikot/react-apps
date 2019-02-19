import React from 'react';
import './search-panel.css';

const SearchPanel = () => {

    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return <input style={searchStyle} className="search-input" placeholder={ searchText }/>;
};


export default SearchPanel;