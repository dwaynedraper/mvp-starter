import React from 'react';
import $ from 'jquery';
const axios = require('axios');

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      tip: '',
      problem: '',
      solution: '',
      contributor: ''
    };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeTip = this.handleChangeTip.bind(this);
    this.handleChangeProblem = this.handleChangeProblem.bind(this);
    this.handleChangeSolution = this.handleChangeSolution.bind(this);
    this.handleChangeContributor = this.handleChangeContributor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let tip = {};
    tip.category = this.state.category;
    tip.title = this.state.title;
    tip.tip = this.state.tip;
    tip.problem = this.state.problem;
    tip.solution = this.state.solution;
    tip.contributor = this.state.contributor;

    $.ajax({
      method: 'POST',
      url: '/submit',
      data: tip,
    })
    .done((res) => {console.log('ajax response success', res)})
    .fail((err) => {console.log('ajax failed', err)});
  }
  handleChangeCategory(event) {
    this.setState({category: event.target.value})
  }
  handleChangeTitle(event) {
    this.setState({title: event.target.value})
  }
  handleChangeTip(event) {
    this.setState({tip: event.target.value})
  }
  handleChangeProblem(event) {
    this.setState({problem: event.target.value})
  }
  handleChangeSolution(event) {
    this.setState({solution: event.target.value})
  }
  handleChangeContributor(event) {
    this.setState({contributor: event.target.value})
  }

  render () {
    return (
      <div>
        <hr/>
        <h4>Submit your own tips here:</h4>
        <form onSubmit={this.handleSubmit}>
          {/* TODO: Add a select dropdown option to make sure people select a viable category. */}
          {/* <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select> */}
          <label>
            Category:
            <input type="text" value={this.state.category} onChange={this.handleChangeCategory} />
          </label>
          <br/>
          <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
          </label>
          <br/>
          <label>
            Tip:
            <input type="text" value={this.state.tip} onChange={this.handleChangeTip}/>
          </label>
          <br/>
          <label>
            Problem:
            <input type="text" value={this.state.problem} onChange={this.handleChangeProblem}/>
          </label>
          <br/>
          <label>
            Solution:
            <input type="text" value={this.state.solution} onChange={this.handleChangeSolution}/>
          </label>
          <br/>
          <label>
            Your Name:
            <input type="text" value={this.state.contributor} onChange={this.handleChangeContributor}/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SubmitForm;