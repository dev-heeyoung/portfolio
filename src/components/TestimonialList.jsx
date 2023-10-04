import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialList({ testimonialData, filterBy }) {
    const filteredData = filterBy === 'all' ? testimonialData : testimonialData?.filter((testimonial) => testimonial.by === filterBy);
    return (
        <ul className='w-1/2 columns-2 px-8 my-24'>
            { filteredData?.map((testimonial) => (<TestimonialCard testimonial={testimonial} />))}
        </ul>
    );
}

