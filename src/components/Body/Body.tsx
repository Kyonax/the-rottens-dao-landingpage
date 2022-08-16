import React, { useEffect, useState } from 'react'; import './Body.css';
import { FaBars, FaTimes, FaRadiation, FaTwitter, FaDiscord, FaAngleRight } from 'react-icons/fa';
import * as Exe from '../../tools/functions';
import LetterDAO from '../../assets/Icons/LetterDAO'

interface BodyProps {
}

const contentModal = {
    letter: {
        title: "LETTER FROM KYO",
        sub_title: "Personal letter for The Rottens DAO & RV Community.",
        description: "I wrote this letter",
        color: "#d9d3bd"
    },
    council: {
        title: "MEMBERS & COUNCIL",
        sub_title: "Members & Head Members of The Rottens DAO team.",
        description: "Let's check",
        color: "#d9d3bd"
    },
    committees: {
        title: "COMMITTEES",
        sub_title: "Committees in charge of execute & manage proposals/projects.",
        description: "Check the list of Committes",
        color: "#d9d3bd"
    },
    dao: {
        title: "DAO ACTIVITIES",
        sub_title: "DAO's Activities & Misions.",
        description: "The future of Rotten Ville needs our help",
        color: "#DED100"
    }
}

const Body: React.FC<BodyProps> = ({ }) => {
    const [hover_color, setHoverColor] = useState("#98D864"), [colorModal, setColorModal] = useState("#d9d3b"),
        [visible, setVisible] = useState("opacity-100"), [modalVisible, setModalVisible] = useState("opacity-0 invisible"),
        [contentModalVisible, setContentModalVisible] = useState("opacity-0 invisible"),
        [title, setTitle] = useState("None"), [subTitle, setSubTitle] = useState("None"),
        [description, setDescription] = useState("None");


    const hidde = () => {
        setTimeout(() => { setContentModalVisible("opacity-0") }, 100);
        setTimeout(() => { setModalVisible("opacity-0") }, 500);
        setTimeout(() => { setVisible("opacity-100") }, 700);

        setTimeout(() => {
            setModalVisible("opacity-0 invisible");
            setContentModalVisible("opacity-0 invisible");
        }, 800)
    }

    const transform = (card: string) => {

        switch (card) {
            case "letter":
                setTitle(contentModal.letter.title);
                setSubTitle(contentModal.letter.sub_title);
                setDescription(contentModal.letter.description);
                setColorModal(contentModal.letter.color)
                break;
            case "council":
                setTitle(contentModal.council.title);
                setSubTitle(contentModal.council.sub_title);
                setDescription(contentModal.council.description);
                setColorModal(contentModal.council.color)
                break;
            case "committees":
                setTitle(contentModal.committees.title);
                setSubTitle(contentModal.committees.sub_title);
                setDescription(contentModal.committees.description);
                setColorModal(contentModal.committees.color)
                break;
            case "dao":
                setTitle(contentModal.dao.title);
                setSubTitle(contentModal.dao.sub_title);
                setDescription(contentModal.dao.description);
                setColorModal(contentModal.dao.color);
                break;
            default:
                break;
        }

        setTimeout(() => { setVisible("opacity-0") }, 100);
        setTimeout(() => { setModalVisible("opacity-100 visible") }, 500);
        setTimeout(() => { setContentModalVisible("opacity-100 visible") }, 700);
    }
useEffect(() => {
    setColorModal("#d9d3be");
}, [])
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full md:w-[95%] max-w-[1300px] h-full flex items-center justify-center'>
                <div className='mt-6 w-full md:w-[90%] flex flex-wrap bg-[#141205] border border-[#1F1C0C] rounded-sm md:rounded-xl p-9'>


                    <div className='flex flex-wrap w-full'>

                        <div className='w-1/2 flex flex-wrap'>
                            <p className={`color-text grid`}>
                                <a className="font-['Sherika'] font-bold text-2xl lg:text-3xl tracking-wider">COMMUNITY FUTURE</a>
                                <a className='text-[.6rem] text-[#00BB7B] sm:text-[0.7rem] lg:text-[0.8rem] sm:mt-[-.4rem] lg:mt-[-.6rem]'>20 / JUL / 2022 - <a href="https://kyonax.link/twitter_nft" className={`hover:text-[${hover_color}]`} target={"_blank"}>@kyonax_on_nft</a></a>
                            </p>
                        </div>


                        <div className='w-1/2 justify-end flex items-right'>
                            <div className='flex letter-style w-[8.4rem] h-[3.2rem] lg:w-[9.4rem] lg:h-[4rem]'>
                                <div className='w-[2rem] lg:w-[3rem] lg:min-w-[3rem]'><LetterDAO /></div>
                                <div className='grid'>
                                    <p className={`color-text text-[.7rem] lg:text-[0.9rem] mt-[-0.2rem] mb-[-0.5rem] font-bold`}>Letter to</p>
                                    <p className={`color-text font-bold font-strech`}>DAAO</p>
                                    <p className={`color-text text-right mt-[-0.4rem] text-[.6rem] lg:text-[0.8rem]`}>Community</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={`w-full mb-3 mt-1 md:mt-auto text-[0.7rem] lg:text-[0.8rem] color-text`}>
                        <a className={`font-bold`}>We are not Degens, We are Rottens!</a>&nbsp;Take a look at the<br />future of The Rottens DAO &amp; Community. Let's change the rules of the game!
                    </div>
                    <div className={`w-full h-[34rem] flex items-center`}>

                        <div className={`${visible} text-[.6rem] sm:text-[.7rem] md:text-[.8rem] transition-[opacity] ease-in-out duration-700 w-full h-full flex flex-wrap`}>

                            <div className='w-full m-2 lg:w-[31%] flex flex-col'>
                                <div onClick={() => transform("letter")} className={
                                    `relative h-full w-full color-text border rounded-sm border-[#D9D3BD]
                                hover:cursor-pointer`
                                }>
                                    <div className='grid items-end h-full w-full'>
                                        <span className='flex justify-end text-right mb-2 mr-2 md:mb-3 md:mr-3'>
                                            <a className="font-['Sherika'] mb-[-.3rem] mr-1 tracking-widest opacity-70">#01 -</a>
                                            <a className="font-['Sherika'] mb-[-.3rem] mr-1 tracking-wider">LETTER FROM KYO</a> <FaAngleRight className='mt-[0.1rem]' />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full m-2 lg:w-[31%] flex flex-row lg:flex-col '>
                                <div onClick={() => transform("council")} className='w-full mr-2 lg:mr-0 lg:mb-2 color-text h-full lg:h-[50%] border rounded-sm border-[#D9D3BD] hover:cursor-pointer'>

                                    <div className='grid items-end h-full w-full'>
                                        <span className='flex justify-end text-right mb-2 mr-2 md:mb-3 md:mr-3'>
                                            <a className="font-['Sherika'] mb-[-.3rem] mr-1 tracking-widest opacity-70">#02 -</a>
                                            <a className="font-['Sherika'] mb-[-.3rem] tracking-wider mr-1">MEMBERS &amp; COUNCIL</a> <FaAngleRight className='mt-[0.1rem]' />
                                        </span>
                                    </div>

                                </div>

                                <div onClick={() => transform("committees")} className='w-full h-full lg:h-[50%] border color-text rounded-sm border-[#D9D3BD] 
                            hover:cursor-pointer'>
                                    <div className='grid items-end h-full w-full'>
                                        <span className='flex justify-end text-right mb-2 mr-2 md:mb-3 md:mr-3'>
                                            <a className="font-['Sherika'] mb-[-.3rem] mr-1 tracking-widest opacity-70">#03 -</a>
                                            <a className="font-['Sherika'] mb-[-.3rem] tracking-wider mr-1">COMMITTEES</a><FaAngleRight className='mt-[0.1rem]' />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full m-2 lg:w-[31%] flex flex-col'>
                                <div onClick={() => transform("dao")} className='w-full h-full border text-[#0A0900] rounded-sm bg-[#DED100] border-[#DED100] hover:cursor-pointer'>
                                    <div className='grid items-end h-full w-full'>
                                        <span className='flex justify-end text-right mb-2 mr-2 md:mb-3 md:mr-3'>
                                            <a className="font-['Sherika'] mb-[-.3rem] mr-1 tracking-widest opacity-70">#04 -</a>
                                            <a className="font-['Sherika'] mb-[-.3rem] tracking-wider mr-1">DAO ACTIVITIES</a><FaAngleRight className='mt-[0.1rem]' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${modalVisible} transition-[opacity] ease-in-out duration-700 absolute w-[100%] left-0 md:left-auto  md:w-[78.37%] lg:w-[79.37%] h-[34rem] max-w-[1067px] flex flex-wrap`}>
                            <div className='w-full m-2 flex flex-col'>
                                <div className={`w-full text-[#0F0D00] h-full border rounded-sm bg-[${colorModal}]  hover:cursor-pointer`}>
                                    <div className={`${contentModalVisible} transition-[opacity] ease-in-out duration-700  h-full w-full`}>
                                        <div onClick={() => hidde()} className='relative z-10 left-[94%] sm:left-[96%] md:left-[96%] lg:left-[97%] top-[3%] w-4 hover:cursor-pointer'><FaTimes /></div>

                                        <span className='relative text-4xl grid justify-start text-left mt-2 ml-6'>
                                            <a className="font-['Sherika'] tracking-wider">{title} <a className='opacity-60'>#</a> </a>
                                            <a className="font-bold mt-[-.4rem] text-sm tracking-wider">{subTitle}</a>
                                        </span>

                                        <span className='relative text-sm grid justify-start text-left mt-3 ml-6'>
                                            <a className="">{description}</a>
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Body
