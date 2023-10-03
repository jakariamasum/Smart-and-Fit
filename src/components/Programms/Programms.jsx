import React from 'react';
import Styles from './Programms.module.css'
import { programsData } from '../../data/programsData'
import ProgrammCard from '../ProgrammCard/ProgrammCard';
import Title from '../Title/Title';
const Programms = () => {
    return (
        <div className={Styles.programms}>
            <Title firstText='Explore our' middleText={'programms'} lastText={'to shape you'} />
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