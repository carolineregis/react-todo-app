import React, {useState} from 'react'
import Button, {SelectButton} from './Button'
import styles from '../styles/modules/app.module.scss'
import { useDispatch, useSelector } from 'react-redux';

function AppHeader() {

  return (
    <div>
      <h1> Hello from header </h1>
      <Button variant='secondary'>
        Click me
      </Button>
    </div>
  );
}

export default AppHeader