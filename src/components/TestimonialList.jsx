import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialList({ testimonialData, filterBy }) {
    const filteredData = filterBy === 'all' ? testimonialData : testimonialData?.filter((testimonial) => testimonial.by === filterBy);
    return (
        <ul className='lg:w-1/2 columns-1 sm:columns-2 lg:columns-1 xl:columns-2 px-8 my-24'>
            { filteredData?.map((testimonial, index) => (<TestimonialCard testimonial={testimonial} key={index} /> ))}
        </ul>
    );
}

