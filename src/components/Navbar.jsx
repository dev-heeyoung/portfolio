import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='flex justify-between px-10 py-3 bg-bgBasic text-textBasic'>
            <Link to='/' className='font-semibold text-2xl font-point'>
                Heeyoung Yang
            </Link>
            <ul className='flex items-center font-title uppercase'>
                <Link to=''>about</Link>
                <Link to='' className='ml-3'>work</Link>
                <Link to='' className='ml-3'>testimonials</Link>
                <Link to='' className='ml-3'>contact</Link>
            </ul>
        </nav>
    );
}

