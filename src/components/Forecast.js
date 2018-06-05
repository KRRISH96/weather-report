import React, { Component } from 'react'
import { getForecast } from '../utils/api'
import { Container,ItemStyle } from './StyledComponents'
import queryString from '../query_string/query-string'
import Loading from './Loading'
import EachDay from './EachDay'
import { Link } from 'react-router-dom'

class Forecast extends Component {
  state = {
    loading: true,
    forecast: [],
  }
  componentDidMount() {
    this.searchedFor = queryString.parse(this.props.location.search).location
    this.requestWeather(this.searchedFor)
  }
  componentWillReceiveProps(nextProps) {
    this.searchedFor = queryString.parse(nextProps.location.search).location
    this.requestWeather(this.searchedFor)
  }

  async requestWeather(location) {
    this.setState({
      loading: true
    })
    const result = await getForecast(location)
    if(result.cod === '200') {
      this.setState({
        loading: false,
        forecast: result,
      })
    }
  }
  handleClick(locationDetail) {
    locationDetail.location=this.searchedFor
    this.props.history.push({
      pathname: '/details/'+this.searchedFor,
      state: locationDetail
    })
  }

  render() {
    const { loading, forecast } = this.state;
    return loading===true
        ? <Loading />
        : <Container>
            <h1 style={{textAlign: 'center', textTransform: 'capitalize'}}>{this.searchedFor}</h1>
            <ItemStyle>
              {forecast.list.map((item) => (<EachDay  key={item.dt} day={item} onClick={this.handleClick.bind(this,item)}/>))}
            </ItemStyle>
            <div style={{textAlign: 'center'}}>
              <p style={{margin: '0 0 5px 0'}}>*Click on each day for more info</p>
              <Link to='/'>Go back</Link>
            </div>
          </Container>
  }
}

export default Forecast;
