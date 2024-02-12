import React, { Component } from 'react';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      firstName: '',
      psychometricScore: '',
      successMessage: '',
      errorMessage: '',
      errors: {
        firstName: '',
        lastName: '',
        psychometricScore: ''
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: value.trim() === '' ? `יש למלא את השדה ${name} .` : '',
      }
    });
  };

  handleBlur = (event) => {
    const { name, value } = event.target;
    if (value.trim() === '') {
      this.setState({
        errors: {
          ...this.state.errors,
          [name]: `יש למלא את השדה ${name} .`
        }
      });
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          [name]: '',
        }
      });
    }

    if (name === 'psychometricScore') {
      const score = parseInt(value.trim());
      if (score > 555) {
        this.setState({ successMessage: 'מזל טוב! יש לך אפשרות להתקבל ללימודים.', errorMessage: '' });
      } else {
        this.setState({ errorMessage: 'שים לב, עליך לנסות שוב בשנה הבאה.', successMessage: '' });
      }
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { lastName, firstName, psychometricScore } = this.state;
    const errors = {
      firstName: firstName.trim() === '' ? 'יש למלא שם פרטי .' : '',
      lastName: lastName.trim() === '' ? 'יש למלא שם משפחה .' : '',
      psychometricScore: psychometricScore.trim() === '' ? 'יש למלא ציון הפסיכומטרי.' : ''
    };
    this.setState({ errors });

    // ניתן להוסיף פה כל פעולה נוספת במידת הצורך (לדוגמה, שליחת הטופס לשרת)
  };

  render() {
    const { errors, errorMessage, successMessage } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          placeholder="שם פרטי"
        />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          placeholder="שם משפחה"
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        <br />
        <input
          type="text"
          name="psychometricScore"
          value={this.state.psychometricScore}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          placeholder="ציון הפסיכומטרי"
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <br />
        <button type="submit">שליחה</button>
      </form>
    );
  }
}

export default FormComponent;
