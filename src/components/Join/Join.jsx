import { useRef } from 'react';
import Button from '../Button/Button';
import Styles from './Join.module.css';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lgbi9hn', 'template_ype88qf', form.current, 'C5-cm-qnWF3ED9YsI')
            .then((result) => {
                console.log(result.text);
                toast.success("Message send successfully!", {
                    position: toast.POSITION.TOP_CENTER
                });
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <div className={Styles.join}>
            <div className={Styles.left}>
                <hr />
                <div>
                    <span className='stroke-text'>ready to </span>
                    <span>level up </span>
                </div>
                <div>
                    <span>your body </span>
                    <span className='stroke-text'>with us </span>
                </div>
            </div>
            <div className={Styles.right}>
                <form ref={form} className={Styles.emailContainer}>
                    <input type="email" name="user_email" placeholder="Enter your email"/>
                    <div className={Styles.btn}  onClick={sendEmail}>
                        <Button text={'Join Now'}/>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Join;