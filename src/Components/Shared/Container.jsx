import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-screen-[2520px] mx-auto px-4'>
            {children}
            
        </div>
    );
};

export default Container;