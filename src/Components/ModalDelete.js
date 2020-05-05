import React, {useState} from 'react'
import {
  Modal,
  Button,
  Container
} from 'reactstrap'
import {
  AiOutlineCloseCircle,
  AiOutlineDelete
} from 'react-icons/ai'

import '../assets/Styles/Components/modalDelete.scss'

export default function ModalDelete(props) {
  return (
    <>
    <span onClick={props.toggle}
      style={{ cursor: 'pointer', fontSize: 18 }}
    > <AiOutlineDelete /></span>
    <Modal className='modalContainerDelete' isOpen={props.openModal}>
      <Container className='modalDelete'>
        <div className="iconDelete">
          <AiOutlineCloseCircle className='deleteIcon' />
        </div>
        <div className="desc">
          <h1>Are you sure ?</h1>
          <p>This actions will affected your data</p>
        </div>
        <div className="actions">
          <Button onClick={props.onclick} className='yes'> Yes </Button>
          <Button onClick={props.toggle} className='no'> No </Button>
        </div>
      </Container>
    </Modal>
    </>
  )
}
