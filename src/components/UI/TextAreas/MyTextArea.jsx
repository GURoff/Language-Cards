import React from 'react';
import classes from './MyTextArea.module.css';

const MyTextArea = ({children, ...props}) => {
    return (
        <div>
          <textarea {...props} className = {classes.MyTextAreaStyles}>
            {children}
          </textarea>
        </div>
    );
};

export default MyTextArea;