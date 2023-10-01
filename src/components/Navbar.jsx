import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className=''>
            <div className='flex justify-between mx-auto'>
                <Link to='/' className='font-semibold text-2xl font-point'>
                    Heeyoung Yang
                </Link>
                <ul className='flex items-center font-title uppercase'>
                    <Link to=''>about</Link>
                    <Link to='' className='ml-5'>work</Link>
                    <Link to='' className='ml-5'>testimonials</Link>
                    <Link to='' className='ml-5'>contact</Link>
                </ul>
            </div>
        </nav>
    );
}

