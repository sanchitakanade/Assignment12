import React from 'react';

export const Filter  = ({filterResults}) => {
    return (
        <form>
            <input type="search" onChange = {filterResults} placeholder="Search..." />
        </form>
    )
}
