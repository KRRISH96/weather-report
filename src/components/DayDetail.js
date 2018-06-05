import React, { Component } from 'react'
import { convertTemp } from '../utils/helpMe'
import EachDay from './EachDay'
import { DetailStyle } from './StyledComponents'
import { Link } from 'react-router-dom'

class DayDetail extends Component {
  render() {
    const props = this.props.location.state
    return (
      <DetailStyle>
        <h1 style={{textTransform: 'capitalize', color: '#900048'}}>{props.location}</h1>
        <EachDay day={props} />
        <div style={{padding: '10px', fontWeight: '300'}}>
          <p>Humidity: <span>{props.humidity}</span></p>
          <p>Min temp: <span>{convertTemp(props.temp.min)} &#8451;</span></p>
          <p>Max temp: <span>{convertTemp(props.temp.max)} &#8451;</span></p>
          <p>Pressure: <span>{props.pressure} hPa</span></p>
          <p>Wind Speed: <span>{props.speed} mps</span></p>
          <hr />
          <Link to={`/forecast?location=${props.location}`}> Go back</Link>
        </div>
      </DetailStyle>
    )
  }
}

export default DayDetail
