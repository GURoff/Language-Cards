import React, { useState } from 'react';
import VocabularyItem from './VocabularyItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import Table from 'react-bootstrap/Table';
//import VocabularyTable from '../components/VocabularyTable';
// import TestVocabularyTableHeader from './TestVocabularyTableHeader';
import MyButtonHide from '../components/UI/Buttons/MyButtonHide';

import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
// import classes from '../styles/VocabularyList.module.css';

const VocabularyList = ({ words, remove }) => {
    const [showSettings, setShowSettings] = useState(false);

    if (!words.length) {
        return (
            <h1 style={{ textAlign: 'center', color: 'red' }}>
                Words not found. <p style={{ color: 'teal' }}>Add the word to your own vocabulary.</p></h1>
        )
    }

    const wordsTableHeader = [
        { id: '#', name: '', value: '' }];

    return (
        <div>
            <MyButtonHide onClick={() => setShowSettings(!showSettings)}>
                {showSettings ? 'Done' : 'Edit'}
            </MyButtonHide>

            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FROM</th>
                        <th>TO</th>
                        <th>1</th>
                    </tr>
                </thead>
            </Table> */}

            <TransitionGroup>
                {words.map((word, index) =>
                    <CSSTransition
                        key={word.id}
                        timeout={500}
                        classNames="word"
                    >
                        <VocabularyItem number={index + 1} word={word} remove={remove} showSettings={showSettings} />
                        {/* <TestVocabularyTableHeader number={index + 1} word={word}/> */}
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
}

export default VocabularyList;
