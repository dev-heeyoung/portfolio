import React, { useEffect, useState } from 'react';

export default function Clock() {
    const [ clock, setClock ] = useState(new Date());

    useEffect(() => {
      setInterval(() => 
        setClock(new Date()), 1000 );
    }, []);

    const date = clock.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const time = clock.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    return (
        <div className='flex font-semibold items-center'>
            <p>{time}</p>
            <p className='mx-1'>/</p>
            <p>{date}</p>
        </div>
    );
}

