import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faArrowsTurnRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Final from './Final'; // Import the Final component
import { useLocation } from 'react-router-dom';
import img from '../assets/images/mail.png';
import img1 from '../assets/images/slack.png';
import video1 from '../assets/images/video1.mp4';
import '../assets/css/Dashboard.css';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state ? location.state.email : 'User';
    const username = email.split('@')[0]; 
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [showQuestion1, setShowQuestion1] = useState(true);

    const [companyDetails, setCompanyDetails] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const isButtonDisabled = !companyDetails.trim() || !websiteLink.trim();

    const handleCompanyDetailsChange = (event) => {
        setCompanyDetails(event.target.value);
    };

    const handleWebsiteLinkChange = (event) => {
        setWebsiteLink(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (showQuestion1) {
            setShowQuestion1(false);
        } else {
            navigate('/final', { state: { username } }); 
            console.log(username)
        }
        setCurrentQuestion(currentQuestion + 1);
        
    };

    return (
        <div className="dashboard-container">
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
            <div className='welcome-text'>
                Welcome to ListenBravo, {username}
            </div>
            <div className="get-started-text">
                Let’s get you started...
            </div>
            <div className="get-started-text1">
                To get you started and get the high-intent leads with analysis, we have prepared this
                small form which you have to fill for our LLM to understand your business and key markets
                and get itself trained to generate outcomes from the internet
            </div>
            <div className='right-side'>
                <div className='alert-placement-box'>
                    <div className='alert-text'>
                        ADD ALERT PLACEMENT
                    </div>
                    <div className='alert-text-bottom'>
                        Add the platform where you want the new alerts of your competitor mentions to be delivered.
                    </div>
                    <div className='checkbox'>
                        <form>
                            <input type='checkbox' className='checkbox1' id='checkbox1'></input>
                            <label htmlFor='checkbox1' className='checkbox-label'></label>
                            <img src={img} alt="Mail Logo" className="mail-logo" />
                            <label className='email-text2'>{email}</label>
                            <input type='checkbox' className='checkbox2' id='checkbox2'></input>
                            <img src={img1} alt="Mail Logo" className="slack-logo" />
                            <button type='button' className='coming-soon'>Coming soon</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='timeline'>
                <div className={`dotk ${currentQuestion === 1 ? 'active' : ''}`}></div>
                <div className={`line ${currentQuestion === 2 ? 'active' : ''}`}></div>
                <div className={`dotk2 ${currentQuestion === 2 ? 'active' : ''}`}></div>
            </div>
            <div className='questions'>
                {showQuestion1 ? (
                    <div className='question1'>
                        <div className='question-number-1'>
                            <p className='question-1'>1</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label className='question-1-label'>ADD WHAT YOUR COMPANY DO/SELL</label>
                            <label className='question-1-label company'>Tell us detail what you/your company build and sell so that we
                                can get you most potent leads everyday!</label>
                            <input type='text' className='input-to-question-1' value={companyDetails} onChange={handleCompanyDetailsChange}></input>
                            <label className='question-1-label2'>WEBSITE LINK</label>
                            <label className='question-1-label2 company2'>Enter the keywords that helps us understanding your business.
                                This could be your USP or any feature.</label>
                            <input type='text' className='input-to-question-1-2' value={websiteLink} onChange={handleWebsiteLinkChange}></input>
                            <input type="button" value="Cancel" onClick={() => { }} className='button-cancel-1' />
                            <input type="submit" value="Save and Continue" className='button-submit-1' disabled={isButtonDisabled} />
                        </form>
                    </div>
                ) : (
                    <div className='question1'>
                        <div className='question-number-1'>
                            <p className='question-1'>2</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label className='question-1-label'>TYPE OF OFFERING </label>
                            <label className='question-1-label company'>Tell us detail what you/your company build and sell so that we
                                can get you most potent leads everyday!</label>
                            <input type='checkbox' className='checkbox3' id='checkbox3'></input>
                            <label htmlFor='checkbox3' className='checkbox-label3'>B2B Product</label>
                            <input type='checkbox' className='checkbox4' id='checkbox4'></input>
                            <label htmlFor='checkbox4' className='checkbox-label4'>B2B Service</label>
                            <label className='question-1-label2 label-offering'>OFFERING SPACE</label>
                            <label className='question-1-label2 company2 label-tell'>Tell us detail what you/your company build and sell so that we can get you most potent leads everyday!</label>
                            <select className='dropdown-menu' value={websiteLink} onChange={handleWebsiteLinkChange}>
                                <option value="" disabled selected>Select one</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>
                            <input type="button" value="Cancel" onClick={() => { }} className='button-cancel-1' />
                            <input type="submit" value="Save and Continue" className='button-submit-1' disabled={isButtonDisabled} />
                        </form>
                    </div>
                )}
            </div>
            <div className='right-video-section'>
                <div className='text-above-video'>
                    CLICK BELOW TO SEE HOW LISTENBRAVO WORKS
                </div>
                <div className='video1-container'>
                    <video className='video1' src={video1} controls></video>
                </div>
                <div className='text-below-video'>
                    <div className='text-below-video1'>
                        OR
                    </div>
                </div>
                <div className='vector-symbol'>
                    <FontAwesomeIcon icon={faArrowsTurnRight} className="vector-symbol" />
                </div>
                <div className='text-right-symbol'>
                    Go through the <a href='#' className='step-to-step'>Step-by-Step Guide</a> to understanding how to navigate through ListenBravo
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;
