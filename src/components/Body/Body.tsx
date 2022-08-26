import React, { useEffect, useState } from 'react'; import './Body.css';
import { FaBars, FaTimes, FaBolt, FaCheck, FaRadiation, FaTwitter, FaCaretLeft, FaCaretRight, FaDiscord, FaAngleRight } from 'react-icons/fa';
import * as Exe from '../../tools/functions';
import LetterDAO from '../../assets/Icons/LetterDAO'

interface BodyProps {
}

const contentModal = {
    letter: {
        title: "LETTER FROM KYO",
        sub_title: "Personal letter for The Rottens DAO & RV Community.",
        description: <div className="mr-4 mb-2">
            <span>Think about the future, a future where decentralization takes part of our lives, where the community's words matter, and are they who create the rules of the game.
                The Lab &amp; I are believers of this path, We are constantly building the way to get to that future &amp; make it real, We are on
                this marathon with another amount of projects with the mission to never give up! and yeah, We'll never give up. <br /><br />
                We probably are not the most organized team, but We always evolve, that's our nature. We are here to create a strong community, and We'll do it... with your help, We all gonna  make it. <br /><br />
                The Rottens DAO is just another step for the upcoming future, giving power to an entire community with liquidity and development support, that's how the DAO works and obviously with a great amount of Innovation and Creativity.<br /><br />
                Are you ready to start with the next level? Let's build the next big thing, sharing knowledge, connections and ideas... Let's start sharing alpha content for the community and expanding the voice of our mission, help us to build the future. We r not Degens... We r Rottens!
                <br /> <br /> <a className="" href="https://kyonax.link/twitter_nft">- Your dear fren Kyo </a>
            </span>
        </div>,
        color: "#D9D3BD"
    },
    council: {
        title: "COUNCIL MEMBERS",
        sub_title: "Members & Head Members of The Rottens DAO team.",
        description: <div className="relative w-[310px] md:w-auto mr-4 mb-6">
            <span>The Council are those people that are ready to do the things right, they are in charge of the DAO's Committees. The Headmasters of plans and managment of each community-led project, they are our gas and the directly connection to The Lab.
                <br /><br /> The Council is choosed each season by DAO polls, everyone can apply to the Council but just the Community is allowed to give them the title of Council Member. If you are a person interested in support full-time The Rottens DAO, the Council is your place.
            </span> <br /> <br />
            <span className=""><a className="text-[#2EB980] flex"><FaRadiation className="mt-[.2rem] mr-1 text-[.8rem]" /> COUNCIL MEMBERS:</a></span>
            <span className="flex"><FaBolt className="ml-6 mt-[.25rem]" /> NO-MEMBERS-YET</span><br /><br /><br /><br /><br /><br /><br />
            <span>- All the DAO desitions will take place in the on-chain platform: <a className="text-[#2F4858]" href="https://realms.today/dao/CBATcY1CSLvrjziKKAuFLK1qki53EBuE6AYw4voNSD5f">Realms Today - The Rottens DAO</a></span>
        </div>,
        color: "#D9D3BD"
    },
    committees: {
        title: "COMMITTEES",
        sub_title: "Committees in charge of execute & manage proposals/projects.",
        description: <div className="mr-4 mb-2">
            <span>Divisions of duties - The Committees, are in charge of specific functions that are pretty important for the DAO. The Committees are run by the Council Members and more than one member could be in charge of a Committee, in the same way, one Council Member could belong to multiple Committees as long as it doesn't affect his/her performance.
                <br /><br /><br />The pilars of the DAO are divided by six departments:<br />
            </span>
            <div className="w-full border grid items-center text-[.65rem] mt-3 mb-4">
                <div className='flex flex-wrap'>
                    <div className='p-3 w-1/2 md:w-1/3'>
                        <h2 className={"font-['Sherika'] text-[1rem] font-bold"}>PROJECT MANAGEMENT</h2>
                        <p>Provide management assistance by setting the board agenda, tracking deliverables, and managing tools/software used to organize committees and the community-led projects.</p>
                    </div>
                    <div className='p-3 w-1/2 md:w-1/3'>
                        <h2 className={"font-['Sherika'] text-[1rem] font-bold"}>COMMUNITY</h2>
                        <p>Internal DAO communications, moderation, and organizing internal events for DAO members.</p>
                    </div>
                    <div className='p-3 w-full md:w-1/3'>
                        <h2 className={"font-['Sherika'] text-[1rem] font-bold"}>MARKETING</h2>
                        <p>Prepare and review marketing materials and external communications; manage DAO social media accounts; manage external event strategies.</p>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='p-3 w-1/2 md:w-1/3'>
                        <h2 className={"font-['Sherika'] text-[1rem] font-bold"}>GOVERNANCE</h2>
                        <p>Run elections. Create bylaws formalizing processes. Bring things on-chain where possible.</p>
                    </div>
                    <div className='p-3 w-1/2 md:w-1/3'>
                        <h2 className={"font-['Sherika'] text-[1rem] font-bold"}>FINANCE</h2>
                        <p>Manage all aspects of The  treasury and distributions of The Rottens DAO, including setting and executing a treasury management strategy.</p>
                    </div>
                    <div className='p-3 w-full md:w-1/3'>
                        <h2 className={"font-['Sherika'] text-[1rem] font-bold"}>PARTNERSHIPS &amp; SPONSORS</h2>
                        <p>Find and negotiate partnerships with other organizations, including brand, ecosystem, and cross-chain partnerships.</p>
                    </div>
                </div>
            </div>
        </div>,
        color: "#D9D3BD"
    },
    dao: {
        title: "DAO ACTIVITIES",
        sub_title: "DAO's Activities & Missions.",
        description: <div className="mr-4 mb-2">
            <span>The Team Work is one of the most important pilars for the DAO, We create and build together as a Community - The Deployment is pretty close, become part of the DAO and help us build the RottenVerse together!</span>
            <br/><br/><br/><br/>
            <a className='relative font-bold top-[100%]' target={"_blank"} href='https://twitter.com/TheRottensDAO'>More information soon, exclusive for the DAO Members...</a>
        </div>,
        color: "#DED100"
    }
}

const Body: React.FC<BodyProps> = ({ }) => {
    const [hover_color, setHoverColor] = useState("#98D864"), [colorModal, setColorModal] = useState("#D9D3BD"),
        [visible, setVisible] = useState("opacity-100"), [modalVisible, setModalVisible] = useState("opacity-0 invisible"),
        [contentModalVisible, setContentModalVisible] = useState("opacity-0 invisible"),
        [title, setTitle] = useState("None"), [subTitle, setSubTitle] = useState("None"),
        [description, setDescription] = useState(<span>none</span>);


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

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full md:w-[95%] max-w-[1300px] h-full flex items-center justify-center'>
                <div className='mt-6 w-full md:w-[90%] flex flex-wrap bg-[#141205] border border-[#1F1C0C] rounded-sm md:rounded-xl p-9'>


                    <div className='flex flex-wrap w-full'>

                        <div className='w-full flex flex-wrap'>
                            <p className={`color-text grid`}>
                                <a className="font-['Sherika'] font-bold text-[2.1rem]  tracking-wider">WE R ROTTENS !</a>
                                <a className='text-[.7rem] text-[#00BB7B] sm:text-[0.7rem] lg:text-[0.8rem] sm:mt-[-.4rem] lg:mt-[-.6rem]'>16 / AUG / 2022 - <a href="https://kyonax.link/twitter_nft" className={`hover:text-[${hover_color}]`} target={"_blank"}>@kyonax_on_nft</a></a>
                            </p>
                        </div>
                    </div>

                    <div className={`w-full mb-3 mt-2 text-[0.8rem] lg:text-[0.9rem] color-text`}>
                        <a className={`font-bold`}>We are doing things in our way,</a>&nbsp;working to become one of the strongest decentralized organizations in the entire ecosystem.
                        Let's make things real. <br /> <br />
                        Community-led projects, and innovations for the entire ecosystem, that's our mission.
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
                                            <a className="font-['Sherika'] mb-[-.3rem] tracking-wider mr-1">COUNCIL</a> <FaAngleRight className='mt-[0.1rem]' />
                                        </span>
                                    </div>

                                </div>

                                <div onClick={() => { transform("committees"); }} className='w-full h-full lg:h-[50%] border color-text rounded-sm border-[#D9D3BD]
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
                                <div className={`w-full text-[#0F0D00] h-full border rounded-sm `+(title === "DAO ACTIVITIES" ? "bg-[#DED100]" : "bg-[#D9D3BD]")}>
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
                    <div className='w-full mb-[-.6rem] justify-end flex items-right'>
                        <div className='flex mr-2 letter-style w-[8rem] h-[2.9rem]'>
                            <div className='w-[1.5rem] mr-[.3rem]'><LetterDAO /></div>
                            <div className='grid'>
                                <p className={`color-text text-[.64rem] mt-[-0.2rem] mb-[-0.45rem] font-bold`}>Letter to</p>
                                <p className={`color-text font-bold text-[.85rem] font-strech`}>DAAO</p>
                                <p className={`color-text text-right mt-[-0.35rem] text-[.65rem]`}>Community</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Body
