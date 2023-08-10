import React from 'react';

const Container = ({children}) => {
    return (
        <div className='2xl:px-8 max-w-screen-[2520px] mx-auto px-4'>
            {children}
            
        </div>
    );
};

export default Container;