// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/css/Waiting.css';

// const Waiting = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             navigate('/dashboard'); 
//         }, 10000); 

//         return () => clearTimeout(timer);
//     }, [navigate]);

//     return (
//         <div className="waiting-container">
//             <div className="waiting-text">Getting things ready for you</div>
//             <div className="dots-container">
//                 <span className="dot dot1">.</span>
//                 <span className="dot dot2">.</span>
//                 <span className="dot dot3">.</span>
//             </div>
//             <div className="rectangles-container1">
//                 <div className="mask1"></div>
//                 <div className="rectangle1 red1"></div>
//                 <div className="rectangle1 orange1"></div>
//             </div>
//         </div>
//     );
// };

// export default Waiting;
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/Waiting.css';

const Waiting = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state ? location.state.email : '';

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/dashboard', { state: { email: email } }); // Pass email to Dashboard screen
        }, 10000); // 10 seconds timeout

        return () => clearTimeout(timer);
    }, [email, navigate]);

    return (
        <div className="waiting-container">
            <div className="waiting-text">Getting things ready for you</div>
            <div className="dots-container">
                <span className="dot dot1">.</span>
                <span className="dot dot2">.</span>
                <span className="dot dot3">.</span>
            </div>
            <div className="rectangles-container1">
                <div className="mask1"></div>
                <div className="rectangle1 red1"></div>
                <div className="rectangle1 orange1"></div>
            </div>
        </div>
    );
};

export default Waiting;
