import React, {Component} from 'react';

import './styles/Contact.scss';
import Title from '../Title';
import Form from '../Form/Form';

class Contact extends Component {
  render(){
    return(
      <section className='Contact'>

        <Title title='Contato'/>

        <Form
          title='Envie sua mensagem'
        />

      </section>
    )
  }
}

export default Contact;