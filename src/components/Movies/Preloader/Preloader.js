import React from 'react'

const Preloader = (props) => {
    const isVisible = props.visibility;

    const preloaderClassName = (
        `${isVisible ? 'preloader' : 'preloader-none'}`
    );

    return (
        <div className={preloaderClassName}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
