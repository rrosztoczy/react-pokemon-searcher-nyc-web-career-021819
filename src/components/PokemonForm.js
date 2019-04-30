import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

    state = {
      name: this.props.formValues.name,
      hp: this.props.formValues.hp,
      frontUrl: this.props.formValues.frontUrl,
      backUrl: this.props.formValues.backUrl
    }

  handleChange = (e, {name, value}) => {
    console.log("name", name, "value", value)
    this.setState({
      [name]: value
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.formValues !== prevProps.formValues) {
      this.setState({
        name: this.props.formValues.name,
        hp: this.props.formValues.hp,
        frontUrl: this.props.formValues.frontUrl,
        backUrl: this.props.formValues.backUrl
      })
    }
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => (this.props.handleSubmit(event, this.state))}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" value={this.state.name} placeholder="Name" name="name" onChange={this.handleChange} />
            <Form.Input fluid label="hp" value={this.state.hp} placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" value={this.state.frontUrl} placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" value={this.state.backUrl} placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
