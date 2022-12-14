import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';
import MyButton from './UI/Buttons/MyButton';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import classes from '../styles/VocabularyItem.module.css';
import '../styles/TestVocabularyTable.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';


const VocabularyItem = (props) => {
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

            {/* <Table striped >
                <tbody>
                    <tr>
                        <td>{props.number}</td>
                        <td>{props.word.input}</td>
                        <td>{props.word.output}</td>
                        <td><MyButton onClick={() => props.remove(props.word)}>
                            Remove
                        </MyButton></td>
                    </tr>
                </tbody>
            </Table> */}

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
