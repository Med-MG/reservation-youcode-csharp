import React from 'react'
import { useStore } from './../../stores/store';
import { Modal } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

const ModalContainer = () => {
    const {modalStore} = useStore()
    return (
       <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} style={{width: 'max-content'}} >
           <Modal.Content >
               {modalStore.modal.body}
           </Modal.Content>
       </Modal>
    )
}

export default observer(ModalContainer) 
