import React from 'react';

import Button from '../Button'
import './styles/Form.scss'

const Form = ({title,className}) => {
  return (
    <form action="" className={className}>
      <h3>{title}</h3>

      <div className="form-item">
        <input type="text" placeholder='Nome'/>
        {/* <span className="line"></span> */}
      </div>

      <div className="form-item">      
      <input type="email" placeholder='Email'/>
      {/* <span className="line"></span> */}
      </div>

      <div className="form-item">
        <textarea placeholder='Mensagem'></textarea>
        {/* <span className="line"></span> */}
      </div>

      <Button className='default'>Enviar</Button>
    </form>
  );

  
};
    Form.defaultProps = {
      className: 'Form',
    }

export default Form;