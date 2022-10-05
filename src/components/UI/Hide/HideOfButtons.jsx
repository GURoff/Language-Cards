import React, { useState } from 'react';
import MyButtonHide from '../Buttons/MyButtonHide';

const HideOfButtons = () => {
  const [show, setShow] = useState(false);
  console.log('ok')
  return(
    <>
      <MyButtonHide onClick={() => setShow(prev => !prev)}>Click</MyButtonHide>
      {show && <div>This is your component</div>}
    </>
  );
}
{/* <div>This is your component</div> */}
export default HideOfButtons;

