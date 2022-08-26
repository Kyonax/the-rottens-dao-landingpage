import React, { useState } from 'react'; import './Header.css';
import { FaBars, FaTimes, FaRadiation, FaTwitter, FaDiscord } from 'react-icons/fa';
import * as Exe from '../../tools/functions';
import TheRottensDAO from '../../assets/Icons/TheRottensDAO'

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ({ }) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div>
            <div className='z-[63] fixed w-full h-[4rem] flex justify-between items-center px-4 bg-[#0a0900] text-white'>
                <div className='relative ml-0 div-style hover:cursor-pointer h-[85%] w-[7rem] grid place-content-center'>
                    <div className='h-9 w-[5.5rem]'><a href="/"><TheRottensDAO /></a></div>
                </div>

                {/* Menu */}
                <ul className='hidden h-[85%] mr-2 items-center md:flex'>
                    <li className='mr-1'><div className='div-style-not hover:cursor-not-allowed no-padding h-[3.1rem] w-[9.1rem]'>
                        <div className='h-[100%] text-[0.8rem] flex flex-wrap items-center'>
                            <p className='w-full flex flex-wrap items-center'>
                                <a href="/" className='mb-[-0.3rem] hover:cursor-not-allowed'>The Rottens DAO</a>
                                <a href="/" className='font-bold hover:cursor-not-allowed'>Members &amp; Council</a>
                            </p>
                        </div>
                    </div></li>

                    <li><div className='div-style-not no-padding hover:cursor-not-allowed h-[3.1rem] w-[5.2rem]'>
                        <div className='h-[100%] text-[0.8rem] flex flex-wrap items-center'>
                            <p className='w-full flex flex-wrap items-center'>
                                <a href="/" className='mb-[-0.3rem] hover:cursor-not-allowed'>Community</a>
                                <a href="/" className='font-bold hover:cursor-not-allowed'>Platform</a>
                            </p>
                        </div>
                    </div></li>

                </ul>


                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden'>
                    {!nav ? <FaBars className='hover:cursor-pointer' /> : <FaTimes className='hover:cursor-pointer' />}
                </div>

                {/* Mobile Menu */}
                <ul className={!nav ? 'hidden' : 'md:hidden absolute top-[4rem] left-0 w-full h-screen bg-[#0a0a0a] bg-opacity-95 flex flex-col justify-center items-center font-thin text-sm z-40'}>


                    <li className='mb-2'><div className='div-style no-padding hover:cursor-pointer h-[3.1rem] w-[9.1rem]'>
                        <div className='h-[100%] flex flex-wrap items-center'>
                            <p className='w-full flex text-[0.8rem] flex-wrap items-center'>
                                <a href="/" className='mb-[-0.3rem]'>The Rottens DAO</a>
                                <a href="/" className='font-bold'>Members &amp; Council</a>
                            </p>
                        </div>
                    </div></li>

                    <li><div className='div-style no-padding hover:cursor-pointer h-[3.1rem] w-[9.1rem]'>
                        <div className='h-[100%] flex flex-wrap items-center'>
                            <p className='w-full flex text-[0.8rem] flex-wrap items-center'>
                                <a href="/" className='mr-1'>Community</a>
                                <a href="/" className='font-bold'>Platform</a>
                            </p>
                        </div>
                    </div></li>
                </ul>

            </div >
            <div className='z-[63] fixed w-full mt-[4rem] h-[1.6rem] flex items-center px-4 bg-[#14130c] text-[#b0ab99]'>
                <div className='justify-start flex ml-1'>
                    <a href="https://realms.today/dao/CBATcY1CSLvrjziKKAuFLK1qki53EBuE6AYw4voNSD5f" target={"_blank"} className='text-[0.7rem] ml-3 flex hover:text-[#98D864]'><FaRadiation className='mt-[0.08rem] mr-1' /> The Rottens DAO |</a>
                    <a href="https://magiceden.io/creators/rotten_ville" target={"_blank"} className='text-[0.7rem] ml-1 flex hover:text-[#98D864]'>| Become a Rotten</a>
                </div>
                <div className='absolute right-4 md:right-8 flex'>
                    <a href="https://twitter.com/TheRottensDAO" target={"_blank"} className='text-[0.7rem] ml-3 flex hover:text-[#98D864]'><FaTwitter /></a>
                    <a href="https://discord.gg/yNFXRzFgXD" target={"_blank"} className='text-[0.78rem] ml-2 flex hover:text-[#98D864]'><FaDiscord /></a>
                </div>
            </div>
        </div>
    )
}

export default Header
