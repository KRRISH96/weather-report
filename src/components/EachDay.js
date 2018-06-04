import React from 'react'
import { Container } from './StyledComponents'
import { getDate } from '../utils/helpMe'

export default function EachDay (props) {
  const date = getDate(props.day.dt)
  const { icon, description } = props.day.weather[0];
  return (
    <Container style={{margin: '5px'}} onClick={props.onClick}>
      <img src={require(`../images/weather/${icon}.svg`)} alt='Weather' style={{width: '70px', height:'70px'}}/>
      <h3 style={{color: 'green'}}>{description}</h3>
      <h3 style={{color: '#333366'}}>{date}</h3>
    </Container>
  )
}
