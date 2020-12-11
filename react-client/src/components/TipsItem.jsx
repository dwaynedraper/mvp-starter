import React from 'react';

const TipsItem = (props) => (
  <div>
    <hr/>
    <h4>Category: { props.tip.category }</h4>
    <h4>{ props.tip.title }</h4>
    { props.tip.tip }<br/>
    { props.tip.problem }<br/>
    { props.tip.solution }<br/>

  </div>
)

export default TipsItem;