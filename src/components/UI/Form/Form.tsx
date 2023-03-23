import React from 'react'
import './Form.scss'
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button/Button';

interface Props {
  buttonLabel: JSX.Element;
  placeholderText: string;
}

const Form = ({buttonLabel, placeholderText}: Props) => {
  const formHandler = () => {

  }

  return (
    <form className='form' onSubmit={formHandler}>
      <input className='form__input' placeholder={placeholderText} />
      <Button className='form__button--reset' label={<CloseIcon />}/>
      <Button className='form__button'  type='submit' label={buttonLabel}/>
    </form>
  )
}

export default Form