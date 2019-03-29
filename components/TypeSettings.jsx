
export default function TypeSettings(props){
  const label = props.type == 'speed' ? (
    <label id={props.type + '-label'}>{props.type}</label>
  ) : (
    <label id={props.type + '-label'}>{props.type + ' length'}</label>
  )

  return (
    <div className='type-settings'>
      {label}
      <div className='inc-dec'>
        <input className='btn' onClick={ e => props.changeFunc(props.type, '-')} type='button' id={props.type + '-decrement'} value='-'/>
        <div id={props.type + '-length'}>{props.val}</div>
        <input className='btn' onClick={ e => props.changeFunc(props.type, '+')} type='button' id={props.type + '-increment'} value='+'/>
      </div>
    </div>
  );
}