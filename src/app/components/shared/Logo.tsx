import React from 'react';
import { Si9Gag } from 'react-icons/si';

const Logo = () => {
    return (
        <div className='flex gap-2'>
            <div className="rounded-lg bg-gradient-to-tr from-blue-500 to-green-500 p-2 text-white">
                <Si9Gag className="text-lg" />
            </div>
             <span className="bg-gradient-to-r from-white via-slate-200 to-green-500 bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
              Gadget Galaxy
            </span>
        </div>
    );
};

export default Logo;