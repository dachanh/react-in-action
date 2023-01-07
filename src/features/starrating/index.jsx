import React, { useState } from 'react';
import PropTypes from 'prop-types';

const createArray = length => [...Array(length)]
export default function StarRating({ totalStars = 10}) {
    const [selectedStars] = useState(3)
    return (
        <div>
            { createArray}            
        </div>
    );
};