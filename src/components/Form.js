import React, { Component } from 'react'
import { FormStyle, ButtonStyle, InputStyle } from './StyledComponents'

class Form extends Component {
    state = {
      location: ''
    }
    updateLocation = (e) => {
      this.setState({
        location: e.target.value
      })
    }
    handleSubmit = () => {
      this.props.onSubmitLocation(this.state.location)
      this.setState({
        location: ''
      })
    }
    render() {
      return (
          <FormStyle className='formMedia'>
            <InputStyle
              type='text' name='location'  value={this.state.location} placeholder='Jacksonville'
              onChange={this.updateLocation}
            />
            <ButtonStyle disabled={!this.state.location}
              type='button' onClick={this.handleSubmit}>
              Get Weather
            </ButtonStyle>
          </FormStyle>
      )
    }
}

export default Form;
