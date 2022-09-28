import React from 'react';
import classes from './MyTextArea.module.css';

const MyTextArea = React.forwardRef((props, ref) => {
    return (
        <div>
          <textarea ref = {ref} className = {classes.MyTextAreaStyles} {...props}/>
        </div>
    );
});

export default MyTextArea;