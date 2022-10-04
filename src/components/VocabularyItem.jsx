import React from 'react';
import classes from './VocabularyItem.module.css';

const VocabularyItem = (props, words) => {

    return (
        <div>
            {/* List of user's words */}
            <div className={classes.wordRow}>
                {/* <table>
                    <tr>
                        <th>ID</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                    {words.map((props) => {
                        return (
                            <tr key={props.number}>
                                <td>{props.number}</td>
                                <td>{props.word.input}</td>
                                <td>{props.word.output}</td>
                            </tr>
                        )
                    })}
                </table> */}

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
