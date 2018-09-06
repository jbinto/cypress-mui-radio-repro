import { Form, Field } from 'react-final-form';
import React, { Component } from 'react';
import MuiRadio from '@material-ui/core/Radio';

import logo from './logo.svg';
import './App.css';

// ref: https://codesandbox.io/s/2z5y03y81r
const Radio = ({
  input: { checked, value, name, onChange, ...restInput },
  meta,
  ...rest
}) => (
  <MuiRadio
    {...rest}
    name={name}
    inputProps={restInput}
    onChange={onChange}
    checked={!!checked}
    value={value}
  />
)


// ref: https://github.com/final-form/react-final-form#conditional-fields
const Condition = (
  { when, is, children } // eslint-disable-line
) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

class App extends Component {
  render() {
    // ref: https://github.com/final-form/react-final-form#getting-started
    return (
      <Form
        onSubmit={(values) => { console.log(values) }}
        initialValues={{
          radioGroup: 'optionOne'
        }}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label>
              <Field
                type="radio"
                component={Radio}
                name="radioGroup"
                value="optionOne"
                id="optionOne"
              />
              Option One
            </label>

            <label>
              <Field
                type="radio"
                component={Radio}
                name="radioGroup"
                value="optionTwo"
                id="optionTwo"
              />
              Option Two
            </label>

            <Condition when="radioGroup" is="optionTwo">
              Only visible when "option two" is selected.
              <Field type="text" component="input" id="textField" name="textField" />
            </Condition>

            <button type="submit">Submit</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>

          </form>
        )}
      >

      </Form>
    );
  }
}

export default App;
