import React, { useState } from 'react';
import TestimonialList from '../components/TestimonialList';
import Background from '../components/Background';

export default function Testimonials() {
    const [ filterBy, setFilteredBy ] = useState('all');
    const testimonialData = [
        { img: 'mainSub', des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.  ipsum dolor sit, amet consectetur adipisicing elit', name: 'coming soon1', company:'company', position:'position', by:'colleague'},
        { img: 'mainSub', des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'coming soon2', company:'company', position:'position', by:'colleague'},
        { img: 'mainSub', des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'coming soon3', company:'company', position:'position', by:'client'},
        { img: 'mainSub', des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'coming soon4', company:'company', position:'position', by:'colleague'},
    ]
    const handleFilter = (e) => setFilteredBy(e.target.id);

    return (
        <section className='w-full relative'>
            <Background />
            <div className='flex flex-col lg:flex-row w-full h-full'>
                <section className='lg:w-1/2 lg:h-screen flex flex-col place-content-center mt-32 lg:mt-0 px-8 md:px-16 z-40 mr-10'>
                    <div className='w-full flex flex-col place-content-center text-left mb-7'>
                        <h1 className='uppercase text-5xl sm:text-7xl mb-5 font-point'>testimonials</h1>
                        <p className='text-lg'>Explore the words of appreciation and feedback from clients and colleagues who have collaborated with me on exciting projects. This page showcases the real-world results of my web development & soft skills.</p>              
                    </div>
                    <ul className='flex items-center'>
                        <li 
                            id='all'
                            onClick={handleFilter}
                            className={`rounded-2xl border py-0.5 px-3 uppercase mr-2 font-semibold cursor-pointer hover:bg-bgSkill hover:border-transparent ${filterBy === 'all' && 'bg-bgSkill border-transparent'}`}>
                            all
                            <span id='all' className='px-1 bg-textBasic text-bgBasic text-center rounded-full text-sm ml-1'>{testimonialData.length}</span>
                        </li>
                        <li 
                            id='client'
                            onClick={handleFilter}
                            className={`rounded-2xl border py-0.5 px-3 uppercase mr-2 font-semibold cursor-pointer hover:bg-bgSkill hover:border-transparent ${filterBy === 'client' && 'bg-bgSkill border-transparent'}`}>
                            clients
                            <span id='client' className='px-1 bg-textBasic text-bgBasic text-center rounded-full text-sm ml-1'>{testimonialData?.filter((data) => data.by==='client').length}</span>
                        </li>
                        <li 
                            id='colleague'
                            onClick={handleFilter}
                            className={`rounded-2xl border py-0.5 px-3 uppercase mr-2 font-semibold cursor-pointer hover:bg-bgSkill hover:border-transparent ${filterBy === 'colleague' && 'bg-bgSkill border-transparent'}`}>
                            colleagues
                            <span id='colleague' className='px-1 bg-textBasic text-bgBasic text-center rounded-full text-sm ml-1'>{testimonialData?.filter((data) => data.by==='colleague').length}</span>
                        </li>
                    </ul>
                </section>
                <TestimonialList testimonialData={testimonialData} filterBy={filterBy} />
            </div>
        </section>
    );
}