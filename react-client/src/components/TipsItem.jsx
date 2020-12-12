import React from 'react';

const TipsItem = (props) => (
  <div>
    <hr/>
    <h4>Category: { props.tip.category }</h4>
    <h4>{ props.tip.title }</h4>
    Tip: { props.tip.tip }<br/><br/>
    Problem: { props.tip.problem }<br/><br/>
    Solution: { props.tip.solution }<br/><br/>
    This tip was brought to you by : {props.tip.contributor}
  </div>
)

export default TipsItem;