import React from 'react';
import List from '../components/List';
import AboutImg from '../components/AboutImg';
import Background from '../components/Background';

export default function About() {
  const personality = [ 'passionate', 'responsible', 'challenging', 'positive' ]
  const webSkills = [ 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'TailwindCSS', 'MySQL', 'Git/Github', 'Netlify', 'Visual studio code' ];
  const otherSkills = [ 'Figma', 'adobe premiere pro', 'WordPress', 'MS Office'];
  const interest = [ 'Books', 'Workout', 'Coffee', 'Travel'];

  return (
    <section className='relative text-center z-10'>
      <Background/>
      <div className='py-28 md:py-36'>
        <div className='px-8'>
          <h1 className=''>
            <p className='font-point text-5xl xl:text-7xl opacity-80'>About</p>
            <p className='font-title text-7xl xl:text-9xl'>Heeyoung Yang</p>
            </h1>
          <p className='mt-20 mb-16 max-w-2xl mx-auto text-lg'>As a motivated front-end developer with over 2 years of experience in web development, I am an effective problem solver with excellent time management and communication skills, ready to deliver value.</p>
        </div>
        <AboutImg />
        <div className='mt-20 mb-32 text-3xl'>

        </div>
        <div className='flex flex-col mx-auto w-full my-20'>
          <div className='group relative flex border-t hover:text-bgBasic after:transition-all after:duration-500 after:block after:h-0 hover:after:h-full after:absolute after:bottom-0 after:w-full after:bg-textBasic after:z-0'>
            <div className='mx-16 py-7 w-full flex flex-col md:flex-row relative z-50 place-content-center md:place-content-start md:items-center '>
              <h1 className='text-3xl xl:text-5xl font-title uppercase mb-3 md:mb-0 md:w-1/3 text-left z-20 mr-10'>
                Personality traits
              </h1>
              <div className='md:w-2/3'>
                <List list={personality} borderColor='group-hover:border-bgBasic'/>
              </div>
            </div>
          </div>
          <div className='group relative flex border-t hover:text-bgBasic after:transition-all after:duration-500 after:block after:h-0 hover:after:h-full after:absolute after:bottom-0 after:w-full after:bg-textBasic after:z-0'>
            <div className='mx-16 py-7 w-full h-fit flex flex-col md:flex-row relative z-50 place-content-center md:place-content-start md:items-center '>
              <h1 className='text-3xl xl:text-5xl font-title uppercase mb-3 md:mb-0 md:w-1/3 text-left z-20 mr-10'>
                Web stack
              </h1>
              <div className='md:w-2/3'>
                <List list={webSkills} borderColor='group-hover:border-bgBasic'/>
              </div>
            </div>
          </div>
          <div className='group relative flex border-t hover:text-bgBasic after:transition-all after:duration-500 after:block after:h-0 hover:after:h-full after:absolute after:bottom-0 after:w-full after:bg-textBasic after:z-0'>
            <div className='mx-16 py-7 w-full flex flex-col md:flex-row relative z-50 place-content-center md:place-content-start md:items-center '>
              <h1 className='text-3xl xl:text-5xl font-title uppercase mb-3 md:mb-0 md:w-1/3 text-left z-20 mr-10'>
                Other Skills
              </h1>
              <div className='md:w-2/3'>
                <List list={otherSkills} borderColor='group-hover:border-bgBasic'/>
              </div>
            </div>
          </div>
          <div className='group relative flex border-t border-b hover:text-bgBasic after:transition-all after:duration-500 after:block after:h-0 hover:after:h-full after:absolute after:bottom-0 after:w-full after:bg-textBasic after:z-0'>
            <div className='mx-16 py-7 w-full flex flex-col md:flex-row relative z-50 place-content-center md:place-content-start md:items-center '>
              <h1 className='text-3xl xl:text-5xl font-title uppercase mb-3 md:mb-0 md:w-1/3 text-left z-20 mr-10'>
                Interests
              </h1>
              <div className='md:w-2/3'>
                <List list={interest}  borderColor='group-hover:border-bgBasic'/>
              </div>
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
              <p className='mr-5'>Do not fear failure but rather fear not trying. </p>
              <p className='mr-5'>Do not fear failure but rather fear not trying. </p>
              <p className='mr-5'>Do not fear failure but rather fear not trying. </p>
              <p className='mr-5'>Do not fear failure but rather fear not trying. </p>
              <p className='mr-5'>Do not fear failure but rather fear not trying. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

