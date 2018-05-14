import React from 'react';

const validation = (props)=> {
   let message = 'Text has perfect length';
   if(props.text.length < 5) { message = 'Text too short'}
   else if(props.text.length > 20) {message = 'Text too long'}
   return(
     <div>{message}</div>
   );
}

export default validation;