import React, { Component } from 'react';
import { Button, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import './Estilo.css';

const options = [
  { key: 'm', text: 'Hombre', value: 'hombre' },
  { key: 'f', text: 'Mujer', value: 'mujer' },
  { key: 'o', text: 'Otro', value: 'otro' },
]

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form className="ui center aligned container">
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Ingrese Nombres'
            placeholder='Nombre'
          />
          <Form.Field
            control={Input}
            label='Ingrese Apellidos'
            placeholder='Apellido'
          />

        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
              control={Input}
              label='Ingrese Correo'
              placeholder='Email'
            />
            <Form.Field
              control={Select}
              label='Seleccione Género'
              options={options}
              placeholder='Género'
            />
        </Form.Group>
        <Form.Group inline>
          <label>Seleccione Asignatura:</label>
          <Form.Field
            control={Radio}
            label='Desarrollo Web'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Arquitectura de SoftWare'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Ambas Asignaturas'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Hablemos :)'
          placeholder='Cuentanos un poco sobre ti...'
        />
        <Form.Field  className="ui center aligned container" control={Button}>Enviar</Form.Field>
      </Form>
    )
  }
}

export default FormExampleFieldControl