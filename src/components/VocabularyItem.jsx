import React from 'react';
import MyButton from './UI/Buttons/MyButton';
import classes from '../styles/VocabularyItem.module.css';
import '../styles/TestVocabularyTable.css';

const VocabularyItem = (props) => {
    return (
        <div>
            <div className={classes.wordRow}>
                <div>
                    <div className={classes.postWord}>
                        {props.number}. {props.word.input} -
                        <div className={classes.postTranslatedWord}>
                            {props.word.output}
                        </div>
                    </div>
                </div>
                {props.showSettings &&      //show or hide remove button
                    <div>
                        <MyButton id="RemoveButton" onClick={() => props.remove(props.word)}>
                            Remove
                        </MyButton>
                    </div>
                }
            </div>
        </div>
    );
}

export default VocabularyItem;
