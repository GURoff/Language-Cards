import React from 'react';
import classes from '../styles/VocabularyItem.module.css';

const VocabularyItem = (props, word) => {

    return (
        <div>
            {/* List of user's words */}
            
            {/* <table className = {classes.tableContent}>
                <tbody >
                <tr className = {classes.trContent}
                    key={props.number}>
                    <td className = {classes.tdContent}>{props.number}</td>
                    <td className = {classes.tdContent}>{props.word.input}</td>
                    <td className = {classes.tdContent}>{props.word.output}</td>
                    <td className = {classes.tdContent}><button onClick={() => props.remove(props.word)}>
                        Remove
                    </button></td>
                </tr>
                </tbody>
            </table> */}
            <div className={classes.wordRow}>
                <div>
                    <div className={classes.postWord}>
                        {props.number}. {props.word.input} -
                        <div className={classes.postTranslatedWord}>
                            {props.word.output}
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => props.remove(props.word)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VocabularyItem;
