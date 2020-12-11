import React from 'react';
import TipsItem from './TipsItem.jsx';

const Tips = (props) => (
  <div>
    <h4>There are {props.tips.length} tips.</h4>
    {props.tips.map((tip, index) => <TipsItem tip={tip} key={index}/>)}

  </div>
)

export default Tips;