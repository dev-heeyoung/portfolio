import React from 'react';
import List from '../components/List';
import AboutImg from '../components/AboutImg';

export default function About() {
  const personality = [ 'passionate', 'responsible', 'easygoing', ]
  const webSkills = [ 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'TailwindCSS', 'Git/Github', 'Netlify', 'Visual studio code' ];
  const otherSkills = [ 'Figma', 'adobe premiere pro', 'WordPress', 'MS Office'];
  const interest = [ 'Reading books', 'Working out', 'Riding a bike', 'Visiting cafes'];

  return (
    <section className='text-center py-36'>
      <div>
        <h1 className=''>
          <p className='font-point text-7xl mb-5 opacity-80'>About</p>
          <p className='font-title text-9xl leading-10'>Heeyoung Yang</p>
          </h1>
        <p className='mt-20 mb-16 max-w-2xl mx-auto text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nemo doloremque, ut possimus minus rerum delectus nesciunt eveniet quae dicta, minima vitae repellat. Eos voluptatem nobis fuga cupiditate, veniam sunt.</p>
      </div>
      <AboutImg />
      <div className='mt-20 mb-32 text-3xl'>

      </div>
      <div className='flex flex-col mx-auto w-full my-20'>
        <div className='group relative flex h-28 border-t hover:text-bgBasic after:transition-all after:duration-500 after:block after:h-0 hover:after:h-full after:absolute after:bottom-0 after:w-full after:bg-textBasic after:z-0'>
          <div className='px-16 w-full flex relative z-50 items-center '>
            <h1 className='text-5xl font-title uppercase w-1/3 text-left z-20'>
              My personality
            </h1>
            <List list={personality} borderColor='group-hover:border-bgBasic'/>
          </div>
        </div>
        <div className='group relative flex h-28 border-t hover:text-bgBasic after:transition-all after:duration-500 after:block after:h-0 hover:after:h-full after:absolute after:bottom-0 after:w-full after:bg-textBasic after:z-0'>
          <div className='px-16 w-full flex relative z-50 items-center '>
            <h1 className='text-5xl font-title uppercase w-1/3 text-left z-20'>
              Web stack
            </h1>
            <List list={webSkills} borderColor='group-hover:border-bgBasic'/>
          </div>
        </div>
        <div className='group relative flex h-28 border-t hover:text-bgBasic after:transition-all after:duration-500 after:block after:h-0 hover:after:h-full after:absolute after:bottom-0 after:w-full after:bg-textBasic after:z-0'>
          <div className='px-16 w-full flex relative z-50 items-center '>
            <h1 className='text-5xl font-title uppercase w-1/3 text-left z-20'>
              Other Skills
            </h1>
          <List list={otherSkills} borderColor='group-hover:border-bgBasic'/>
          </div>
        </div>
        <div className='group relative flex h-28 border-t border-b hover:text-bgBasic after:transition-all after:duration-500 after:block after:h-0 hover:after:h-full after:absolute after:bottom-0 after:w-full after:bg-textBasic after:z-0'>
          <div className='px-16 w-full flex relative z-50 items-center '>
            <h1 className='text-5xl font-title uppercase w-1/3 text-left z-20'>
              My interest
            </h1>
          <List list={interest}  borderColor='group-hover:border-bgBasic'/>
          </div>
        </div>
      </div>
      <div className='my-36'>
        <div className='flex overflow-hidden my-5'>
          <div className='flex animate-scrollingReverse'>
            <div className='block bg-about1 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about2 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about3 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about4 bg-cover bg-center h-96 w-72 mx-5 saturate-70' />
            <div className='block bg-about6 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about5 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about1 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about2 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about3 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about4 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about5 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
            <div className='block bg-about6 bg-cover bg-center h-96 w-72 mx-5 saturate-50' />
          </div>
        </div>
        <div className='flex overflow-hidden my-3'>
          <div className='flex animate-scrolling text-5xl uppercase font-point whitespace-nowrap'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

