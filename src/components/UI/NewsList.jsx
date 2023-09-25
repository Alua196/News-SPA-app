import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({data}) => {
    return (
        <>
        {
            data?.map((item, index) => (
                <NewsCard item={item} key={index} />
            ))}
        </>
    );
};

export default NewsList;