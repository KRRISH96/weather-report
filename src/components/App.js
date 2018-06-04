import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Forecast from './Forecast'
import Form from './Form'
import DayDetail from './DayDetail'
import { HomeStyle, HeadStyle, Container } from './StyledComponents'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route render={(props) => (
            <div  style={{background: '#00818a'}}>
            <Container>
              <HeadStyle className='headMedia'>
                <h1 style={{paddingLeft: '20px'}}><Link to='/'>My Weather</Link></h1>
                <Form onSubmitLocation={(location) => {
                  props.history.push({
                    pathname: '/forecast',
                    search: `?location=${location}`
                  })
                }}/>
              </HeadStyle>
            </Container>
            </div>
          )} />
          <Route exact path='/' render={(props) => (
            <HomeStyle>
              <Container>
                <h1 style={{color: '#ff6600', textAlign: 'center'}}>Enter a Location</h1>
                <div className='homeForm' style={{  border: '2px dashed orange'}}>
                <Form onSubmitLocation={(location) => {
                  props.history.push({
                    pathname: '/forecast',
                    search: `?location=${location}`
                  })
                }}/>
                </div>
              </Container>
            </HomeStyle>
          )} />
          <Route path='/forecast' component={Forecast} />
          <Route path='/details/:location' component={DayDetail} />
        </div>
      </Router>
    )
  }
}

export default App;
