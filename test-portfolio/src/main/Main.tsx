import React from 'react';
import style from './Main.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.greetingsContainer}>
                    <span>Hi there </span>
                    <h1>I am Bobrovski Roman.</h1>
                    <p>A frontend developer.</p>
                </div>

                <div className={style.photoContainer}></div>
            </div>
        </div>
    );
};

export default Main;