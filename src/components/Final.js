import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Dashboard.css';
import group from '../assets/images/group.png';
import '../assets/css/Final.css';

const Final = () => {
    const location = useLocation();
    const username = location.state ? location.state.username : 'User';

    return (
        <div>
            <div className="navbar">
                <div className="rectangles-container2">
                    <div className="mask2"></div>
                    <div className="rectangle2 red2"></div>
                    <div className="rectangle2 orange2"></div>
                </div>
                <div className="home-text">
                    <span>Home</span>
                    <hr className='white-line' />
                </div>
                <div className="skin-color-circle">
                    <div className="oval1"></div>
                    <div className="oval2"></div>
                    <div className="smile"></div>
                </div>
                <div className="dropdown-icon">
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
            <div className='central-text'>
                <div className='great-job-name'>
                You’ve done a great job, {username}!
                </div>
                <div className='robot-creation'>
                    <div className='robot-face'>
                        <div className='ear ear1'></div>
                        <div className='ear ear2'></div>
                    </div>
                    <div className='robot-mask'>
                        <div className='robot-eye eye1'></div>
                        <div className='robot-eye eye2'></div>
                    </div>
                    <div className='robot-body'>
                        <div className='robot-body-circle'></div>
                        <img src={group} className='image-robot-body'></img>
                    </div>
                    <div className='robot-body-circle circle2'></div>
                </div>
            </div>
            <div className='text-below-robot'>
                <div className='text-below-robot1'>Now, sit back and relax....</div>
                <div className='text-below-robot2'>Our Agent, Bravo is listening through the internet in the meanwhile and will come up with super 
                relevant high-intent leads for your business in the next <span className='text-below-robot21'>3-4 days.</span></div>
                <div className='text-bottom-robot1'>We’ll email you once the leads are ready for you. Checkout for an email with some good stuff in it :)</div>
            </div>
        </div>
    );
};

export default Final;
