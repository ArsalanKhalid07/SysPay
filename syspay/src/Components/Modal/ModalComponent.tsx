import React from 'react'
import { Button, Fade, TextField } from '@mui/material'
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import "./ModalComponent.scss"



const ModalComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className='modal'>
        <Button onClick={handleOpen}><SearchIcon className='searchIcon'/></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        className='search-modal'
        onClose={handleClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
            <TextField variant='standard' placeholder='Job Title, Company, or Keywords' />  
        </Fade>
      </Modal>
    </div>
  )
}

export default ModalComponent