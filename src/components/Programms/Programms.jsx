import React from 'react';
import Styles from './Programms.module.css'
import { programsData } from '../../data/programsData'
import ProgrammCard from '../ProgrammCard/ProgrammCard';
const Programms = () => {
    return (
        <div className={Styles.programms}>
            <div className={Styles.programmTitle}>
                <span className='stroke-text'>Explore our</span>
                <span>Programms</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className={Styles.programmCategories}>
                {
                    programsData.map(plan => (
                        <ProgrammCard title={plan.heading} desc={plan.details} img={plan.image} />
                    ))
                }
            </div>
        </div>
    );
};

export default Programms;