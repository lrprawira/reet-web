import React from "react";
import { RiArrowDropDownLine, RiUserSmileFill } from 'react-icons/ri';
import styles from '../styles/ProfileButton.module.css';

const ProfileButton = (props) => {
    return (
        <div className={styles.profileButtonWrapper} style={ props.style } >
            <RiArrowDropDownLine color={'white'} size={24} />
            <div className={styles.profileButtonUser}>Guest</div>
            <RiUserSmileFill color={'white'} size={24} />
        </div>
    );
};

export default ProfileButton;