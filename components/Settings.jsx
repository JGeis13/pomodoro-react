import TypeSettings from './TypeSettings'

export default function Settings(props){
  return (
    <div id='settings' className='closed'>
      <div className='material-icons' onClick={props.toggleShow}>settings</div>
      <TypeSettings type='break' val={props.breakTime} changeFunc={props.settingsChange} />
      <TypeSettings type='session' val={props.sessionTime}  changeFunc={props.settingsChange}/>
      { props.devMode ? (<TypeSettings type='speed' val={props.speed}  changeFunc={props.settingsChange}/>) : null}
      
      <button id='reset' onClick={props.reset}>Restore Defaults</button>
      
      <div className='checkbox-container'>
        <label htmlFor='dev-mode'>Dev Mode</label>
        <input name='dev-mode' type="checkbox" onChange={props.toggleMode} checked={props.devMode}/>
      </div>
    </div>
  );
}