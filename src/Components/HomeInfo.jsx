import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from "../assets/icons"


// const InfoBox = ({ text, link, btnText }) => {
//     <div className='info-box'>
//         {text}
//         <Link to={link}>
//             {btnText}
//         </Link>
//     </div>
// }

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} className='w-4 h-4 object-contain' />
            </Link>
        </div>
    );
}

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm
            <span className='font-semibold mx-2 text-white'>Prakhar Shrivastava</span>
            👋
            <br />
            A Software Engineer from India
        </h1>
    ),
    2: (
        <InfoBox
            text="B.Tech. professional with over 1.5 years of experience in Web and Application Development, currently working as SDE 1 at Brainowls Technologies Pune."
            link="/about"
            btnText="Learn More About ME"
        />
    ),
    3: (
        <InfoBox
            text="Made Multiple Projects To Gain Expertise In MERN Stack"
            link="/projects"
            btnText="Visit My Portfolio"
        />
    ),
    4: (
        <InfoBox
            text=" Need a project done or looking for a dev? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's Talk"
        />
    )
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo
