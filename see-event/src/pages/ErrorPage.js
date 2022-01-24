import React from 'react';

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className='wrapper-error'>
            <div className='error-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="400" height="400"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-3a5 5 0 0 1 10 0h-2a3 3 0 0 0-6 0H7zm1-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="rgba(149,164,166,1)"/></svg>
            </div>
            <h1 className='title'>404</h1>
            <h3 className='subtitle'>Page not found</h3>
            <p className='quote'>The page you are looking doesn't exist or an other error occured,</p>
            <p className='quote'> Go back, or head over to weebrl.com to choosen a new direction</p>

        </div>
    );
};

export default ErrorPage;