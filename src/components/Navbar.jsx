import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
               <div className='flex justify-center items-center space-x-3 mt-4'>
            <Link className='text-xl font-semibold' to={'/task'}>All Tasks</Link>
            <Link className='text-xl font-semibold' to={'/addtask'}>Add Tasks</Link>
        </div>
    );
};

export default Navbar;