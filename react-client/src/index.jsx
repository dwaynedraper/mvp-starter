import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Tips from './components/Tips.jsx';
import SubmitForm from './components/SubmitForm.jsx';
// import { makeStyles } from '@material-ui/core';
// import { Drawer } from '@material-ui/core';
// import { CssBaseline } from '@material-ui/core';
// import { AppBar } from '@material-ui/core';
// import { Toolbar } from '@material-ui/core';
// import { List } from '@material-ui/core';
// import { Typography } from '@material-ui/core';
// import { Divider } from '@material-ui/core';
// import { ListItem } from '@material-ui/core';
// import { ListItemText } from '@material-ui/core';

// const drawerWidth = 200;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: []
    }
  }

  getTips() {
    $.ajax({
      url: '/tips',
      success: (data) => {
        this.setState({
          tips: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  // postTips() => {

  // }

  componentDidMount() {
    this.getTips();
  }

  // handleSubmit(tip) {
  //   axois.post('/submit', {data: tip})
  //   .then(response => )
  // }

  render () {
    return (<div>
      <h1>JavaScript - The Little Things</h1>
      <h4>Tips and Tricks for JavaScript developers</h4>
      <Tips tips={this.state.tips}/>
      <SubmitForm getTips={this.getTips.bind(this)} />
    </div>)
  }
  // THIS MAY BE TOO MUCH FOR MVP. IF I GET EVERYTING WORKING I WILL COME BACK TO IT AND IMPLEMENT SIDEBAR AND INDIVIDUAL CATEGORIES, BUT FOR THE SAKE OF THE MVP SPRINT, COMMENTING THIS OUT FOR NOW.
  // render () {
  //   return (
  //     <div className='root'>
  //       <CssBaseline />
  //       <AppBar position='fixed' className='appBar' margin-left='200px'>
  //         <Toolbar>
  //           <Typography variant='h6' margin-left='200px' noWrap>
  //             {this.state.activeCategory}
  //           </Typography>
  //         </Toolbar>
  //       </AppBar>
  //       <Drawer variant='permanent' className='drawer'>
  //         <Divider />
  //         <List>
  //           {['Variables', 'Data Types', 'Conditionals', 'Arrays and Objects', 'Iteration', 'Functions', 'Higher Order Functions'].map((text) => {
  //             return <ListItem button key={text}>
  //               <ListItemText primary={text} />
  //             </ListItem>
  //           })}
  //         </List>
  //         <Divider />
  //         <List>
  //           <ListItem>
  //             <ListItemText primary='lifehacks' />
  //           </ListItem>
  //         </List>
  //       </Drawer>
  //       <h1>JavaScript - The Little Things</h1>
  //       <h2>A Collection of JS Tips and Tricks</h2>
  //       <Tips category={this.state.activeCategory}/>
  //     </div>
  //   )
  // }
}

ReactDOM.render(<App />, document.getElementById('app'));