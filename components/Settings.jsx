import TypeSettings from './TypeSettings'

export default function Settings(props){
  return (
    <div id='settings' className='closed'>
      <div className='material-icons' onClick={props.toggleShow}>settings</div>
      <TypeSettings type='break' val={props.breakTime} changeFunc={props.settingsChange} />
      <TypeSettings type='session' val={props.sessionTime}  changeFunc={props.settingsChange}/>
      <button id='reset' onClick={props.reset}>Restore Defaults</button>
    </div>
  );
}