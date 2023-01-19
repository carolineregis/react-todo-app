import React, {useState} from 'react'
import Button, {SelectButton} from './Button'
import styles from '../styles/modules/app.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import ToDoModal from './ToDoModal';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className={styles.appHeader}>
      <Button variant='primary' onClick={() => setModalOpen(true)}>
        Add Task
      </Button>

      <SelectButton>
        <option value="all"> ALL </option>
        <option value="incomplete"> Incomplete </option>
        <option value="complete"> Complete </option>
      </SelectButton>

      <ToDoModal modalOpen={modalOpen} setModalOpen={setModalOpen}></ToDoModal>
    </div>
  );
}

export default AppHeader