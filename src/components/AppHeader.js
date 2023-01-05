import React from 'react'
import Button, {SelectButton} from './Button'
import styles from '../styles/modules/app.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import ToDoModal from './ToDoModal';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.appHeader}>
      <Button variant='primary'>
        Add Task
      </Button>

      <SelectButton>
        <option value="all"> ALL </option>
        <option value="incomplete"> Incomplete </option>
        <option value="complete"> Complete </option>
      </SelectButton>

      <ToDoModal></ToDoModal>
    </div>
  );
}

export default AppHeader