import React from 'react';

const LazyImage = ({alt = '', ...props}) => (
    <img loading="lazy" alt={alt} {...props} />
);

export default LazyImage;
