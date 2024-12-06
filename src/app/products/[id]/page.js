import React from 'react';

const page = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <h1>this is dainamic page {params.id}, {searchParams.category}</h1>
    );
};

export default page;