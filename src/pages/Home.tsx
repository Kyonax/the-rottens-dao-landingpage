import React from 'react';
import Body from '../components/Body/Body';
import Header from '../components/Header/Header';

interface HomeProps { }

const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <div >
            <div><Header /></div>
            <div className='w-full h-[4.6rem]'></div>
            <div><Body /></div>
        </div>
    )

}

export default Home
