import React from "react";
import SeparatorVertical from "../SeparatorVertical";
import styles from '../styles/RecipeWarning.module.css';
import {AiOutlineWarning} from 'react-icons/ai';

const RecipeWarning = props => {
    const isEmpty = (limitation) => {
        const l = JSON.parse(limitation);
        return !l.length;
    };

    const getLimitations = (limitation) => {
        const l = JSON.parse(limitation);
        let msg = '';
        if (l.length === 1)
            return `${msg} ${l[0]}`;
        else
            l.map((lm, i) => {
                if (i === l.length-1) {
                    return msg += ` and ${lm}`
                }
                return msg += `, ${lm}`
            })
        return msg;
    }

    return (
        <>
            {
                isEmpty(props.limitation) ? <></> :
                <>
                    <SeparatorVertical height={18}/>
                    <div className={styles.warningTicker} style={{width: props.width - 35.42}}>
                        <span style={{display: 'flex'}}>
                            <AiOutlineWarning size={'1.2em'} style={{
                                display: "block",
                                marginRight: 16
                            }} />
                            This recipe contains { getLimitations(props.limitation) }
                        </span>
                    </div>
                </>
            }
        </>
    );
};

export default RecipeWarning;