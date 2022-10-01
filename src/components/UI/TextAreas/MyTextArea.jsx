import React from 'react';
import classes from './MyTextArea.module.css';

const MyTextArea = React.forwardRef((props, ref) => {
    return (
        <div>
          <textarea 
          className = {classes.MyTextAreaStyles}
          {...props}
          ref = {ref}
          cols = '30'
          rows='1'
          />
        </div>
    );
});

export default MyTextArea;