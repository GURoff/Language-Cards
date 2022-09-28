import React from 'react';
import classes from './VocabularyItem.module.css';

const VocabularyItem = (props) => {

    return (
        <div>
            {/* List of user's words */}
            <div className={classes.post}>
                <div>
                    <div className={classes.postWord}>
                        {props.number} {props.word.input} -
                        <div className={classes.postTranslatedWord}>{props.word.output}</div>
                    </div>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default VocabularyItem;
