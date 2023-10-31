import React from 'react';

export default function List({ list, borderColor }) {
    return (
        <ul className='flex flex-wrap'>
            {list?.map((text, index) => (
                <div className={`rounded-2xl border py-0.5 px-3 my-1 h-fit capitalize mr-2 font-semibold cursor-pointer hover:bg-bgSkill hover:border-transparent ${borderColor}`} key={index}>
                    {text}
                </div>
            ))}
        </ul>
    );
}

