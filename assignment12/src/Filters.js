/* Name: Sanchita Kanade
    Instructor Name: Zak Ruvalcaba
    Class: CS648.01 Modern Web Development Frameworks Fall 2019
    File: Filters.js
   Assignment No.: 12
*/

import React from 'react';

export const Filter  = ({handleFilter}) => {
    return (
        <form class="my-lg-3 col-md-6">
            <input type="search" class = "form-control mr-sm-2" onChange = {handleFilter} placeholder="Search..." />
        </form>
    )
}
