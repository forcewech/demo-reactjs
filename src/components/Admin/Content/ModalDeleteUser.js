import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';

const ModalDeleteUser = (props) => {
  const {show, setShow, dataDelete, fetchAllUserWithPaginate} = props;

  const handleClose = () => setShow(false);
  const handleBtnDelete = async () => {
    setShow(false);
    let data = await deleteUser(dataDelete.id);
    if(data && data.EC === 0){
        toast.success(data.EM);
        handleClose();
        await fetchAllUserWithPaginate(props.pagePos)
      }
      if(data && data.EC !== 0){
        toast.error(data.EM);
      }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure delete!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleBtnDelete}>
            OK
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;