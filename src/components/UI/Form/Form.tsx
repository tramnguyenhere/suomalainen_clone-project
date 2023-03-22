import React from 'react'
import './Form.scss'
import CloseIcon from '@mui/icons-material/Close';

interface FormInterface {
  buttonLabel: JSX.Element;
  placeholderText: string;
}

const Form = ({buttonLabel, placeholderText}: FormInterface) => {
  const formHandler = () => {

  }

  return (
    <form className='form' onSubmit={formHandler}>
      <input className='form__input' placeholder={placeholderText} />
      <button className="form__button--reset">
        <CloseIcon />
      </button>
      <button className='form__button' type='submit'>
        {buttonLabel}
      </button>
    </form>
  )
}

export default Form