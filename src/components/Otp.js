
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Rectangles.css';
import "../assets/css/Otp.css";

const NextPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [editedEmail, setEditedEmail] = useState('');
    const email = location.state ? location.state.email : '';
    const [otp, setOtp] = useState(['', '', '', '']);
    const otpInputRefs = useRef([]);

    useEffect(() => {
        if (isEditing) {
            otpInputRefs.current[0].focus();
        }
    }, [isEditing]);

    const handleEditEmail = () => {
        setIsEditing(true);
        setEditedEmail(email);
    };

    const handleSaveEmail = () => {
        setIsEditing(false);
        console.log('Edited Email:', editedEmail);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedEmail('');
    };

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (/^\d$/.test(value) && index < otp.length - 1 && otpInputRefs.current[index + 1]) {
            otpInputRefs.current[index + 1].focus();
        }

        if (newOtp.join('') === '1234') {
            navigate('/waiting-screen', { state: { email: email } });
        }
    };

    return (
        <div className="next-page-container">
            <div className="rectangles-container">
                <div className="mask"></div>
                <div className="rectangle red"></div>
                <div className="rectangle orange"></div>
            </div>
            <div className="enter-otp-text">
                Enter OTP
            </div>
            <div className="email-text1">
                {isEditing ? (
                    <div className="edit-email-container">
                        <input
                            type="text"
                            value={editedEmail}
                            onChange={(e) => setEditedEmail(e.target.value)}
                            className="edit-email-input"
                        />
                        <div className="edit-email-buttons">
                            <button className="save-edit-button" onClick={handleSaveEmail}>
                                Save
                            </button>
                            <button className="cancel-edit-button" onClick={handleCancelEdit}>
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        Enter the 4-digit OTP you received on{' '}
                        <span className="dynamic-email">{editedEmail || email}</span>
                        <FontAwesomeIcon
                            icon={faPen}
                            className="pen-icon"
                            onClick={handleEditEmail}
                        />
                    </>
                )}
            </div>
            <div className="otp-input-container">
                {otp.map((value, index) => (
                    <input
                        key={index}
                        ref={(ref) => (otpInputRefs.current[index] = ref)}
                        type="text"
                        maxLength="1"
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="otp-input"
                    />
                ))}
            </div>
            <div className="resend-link">
                <a href="#" className="resend-text">Resend</a>
            </div>
        </div>
    );
};

export default NextPage;
