import { Component } from 'react';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { FirstTitle, FormStyled } from './ContactForm.styled';


const INITIAL_STATE = {  
       name: '',
       number: ''   
};

 class Form extends Component{
  state = { ...INITIAL_STATE };  
  
   nameInputId = nanoid();
   numberInputId = nanoid();

   handleChange = evt => {
      const { name, value } = evt.currentTarget;
      this.setState({ [name]: value });
   };

   handleSubmit = evt =>{
     evt.preventDefault();   
     this.props.onSubmit(this.state, this.resetForm);
   };

   resetForm = () => {       
     this.setState({ ...INITIAL_STATE });     
  };

   render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
       <FirstTitle>Phonebook</FirstTitle>
        <div>
         <label htmlFor={this.nameInputId}>Name</label><br/>       
          <input         
          type="text"
          value={this.state.name}
          name="name"
          id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required onChange={this.handleChange} /> 
          <br />  
          <br />       
         <label htmlFor={this.numberInputId}>Number</label><br/>       
          <input          
          type="tel"
          value={this.state.number}
          name="number"
          id={this.numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required onChange={this.handleChange} />  
          <br />  
          <br />  
        <div>
         <button type='submit'>Add contact</button>
        </div>
       </div>
      </FormStyled>
    )
  }
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};

export default Form;