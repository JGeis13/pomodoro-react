import React from 'react'

export default function ModalButton() {
  

  const openModal = () => {
    const mo = document.getElementById('modal') 
    mo.style.display = 'flex'
  }

  return (
    <button className='btn' onClick={openModal} id='info'>
      <i className="material-icons">info</i>
    </button>
  )
}
