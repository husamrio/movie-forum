import React from "react";

function Search({searchInput}) {

    return (
        <div className="searchbar">
            <input 
                onChange={searchInput} 
                type="text"
                placeholder="Search for a show, movie..."
            />
        </div>
    );
}

export default Search;