import React from 'react'

export default function Modal() {

  const closeModal = () => {
    const mo = document.getElementById('modal') 
    mo.style.display = 'none'
  }

  return (
    <div id='modal' style={{display: 'none'}}>
      <div className='modal-container'>
        <span onClick={closeModal}>{'\xD7'}</span>
        <div className='content'>
          <h2>Pomodoro Clock - About</h2>
          <p>Per <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a>, "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student."</p>
          
        </div>
      </div>
    </div>
  )
}
