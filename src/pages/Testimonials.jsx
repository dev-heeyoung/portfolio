import React, { useState } from 'react';
import TestimonialList from '../components/TestimonialList';

export default function Testimonials() {
    const [ filterBy, setFilteredBy ] = useState('all');
    const testimonialData = [
        { img: 'mainSub', des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.  ipsum dolor sit, amet consectetur adipisicing elit', name: 'name1', company:'company', position:'position', by:'colleague'},
        { img: 'mainSub', des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'name2', company:'company', position:'position', by:'colleague'},
        { img: 'mainSub', des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'name3', company:'company', position:'position', by:'client'},
        { img: 'mainSub', des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'name4', company:'company', position:'position', by:'colleague'},
    ]
    const handleFilter = (e) => setFilteredBy(e.target.id)
    return (
        <section className='w-full h-full'>
            <div class="lines absolute w-screen h-screen z-0">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className='flex w-full'>
                <section className='w-1/2 h-screen flex flex-col place-content-center px-16 z-40'>
                    <div className='w-full flex flex-col place-content-center text-left mb-7'>
                        <h1 className='uppercase text-8xl mb-5 font-point'>testimonials</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Ratione iure repellat voluptatum sit eos dolor exercitationem, eaque natus voluptates, hic quam vitae, error libero facilis fugiat voluptatibus non aspernatur odio!</p>              
                    </div>
                    <ul className='flex items-center'>
                        <li 
                            id='all'
                            onClick={handleFilter}
                            className='rounded-2xl border py-0.5 px-3 uppercase mr-2 font-semibold cursor-pointer hover:bg-bgSkill hover:border-transparent'>all</li>
                        <li 
                            id='client'
                            onClick={handleFilter}
                            className='rounded-2xl border py-0.5 px-3 uppercase mr-2 font-semibold cursor-pointer hover:bg-bgSkill hover:border-transparent'>clients</li>
                        <li 
                            id='colleague'
                            onClick={handleFilter}
                            className='rounded-2xl border py-0.5 px-3 uppercase mr-2 font-semibold cursor-pointer hover:bg-bgSkill hover:border-transparent'>colleagues</li>
                    </ul>
                </section>
                <TestimonialList testimonialData={testimonialData} filterBy={filterBy} />
            </div>
        </section>
    );
}