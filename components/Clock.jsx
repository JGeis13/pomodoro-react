import React, {Component} from 'react'
import Settings from './Settings'
import Timer from '../functions/accurateInterval'

export default class Clock extends Component {
  constructor(props){
    super(props);
    this.defaultVals = [5, 25]; // 5, 25
    this.state = {
      breakTime: this.defaultVals[0],
      sessionTime: this.defaultVals[1],
      currentType: 'session',
      displayTime: this.defaultVals[1] * 60,
      start: null,
      timer: '',
      isActive: false,
    }
    this.bindThis();
  }
  // Lifecycle Hooks
  componentDidMount(){
    //this.timer = setInterval(this.tick, 200);
  }
  componentWillUnmout(){
    this.state.timer.cancel();
  }
  //
  bindThis(){
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.tick = this.tick.bind(this);
    this.handleSettingsChange = this.handleSettingsChange.bind(this);
    this.restart = this.restart.bind(this);
  }
  tick(){
    let newTime = this.state.displayTime - 1;
    this.setState({
      displayTime: newTime,
    });
    // !! Handle end of timer
    if(newTime == 0) document.querySelector('#beep').play();
    if(newTime < 0) return this.switchModes();
  }
  toggleSettings(e){
    let btn = e.target;
    let bool = btn.parentNode.classList.toggle('closed');
    if(bool){
      btn.style.transform = 'translateX(-311px) rotate(360deg)';
      btn.innerText = 'settings';
      btn.style.color = 'var(--secondary-color)';
    }
    else {
      btn.style.transform = 'translateX(0px) rotate(0deg)';
      btn.innerText = 'clear';
      btn.style.color = 'var(--tertiary-color)';
    }
  }
  switchModes(){
    this.state.timer.cancel();
    let newType = this.state.currentType == 'session' ? 'break' : 'session';
    this.setState( prevState => ({
      currentType: newType,
      displayTime: prevState[newType + 'Time'] * 60,
      start: Date.now(),
      isActive: true,
    }));
    //this.timer = setInterval(this.tick, 200);
    this.state.timer = Timer.accurateInterval( this.tick, 1000);
  }
  handleSettingsChange(typeStr, operation){
    if(this.state.isActive) return;
    let s = this.state.sessionTime, b = this.state.breakTime;
    if(typeStr == 'session'){
      if(operation == '-') s--;
      else if(operation == '+') s++;
      if(s > 60 || s < 1) return;
      this.setState({sessionTime: s,}); 
    }
    else if(typeStr == 'break'){
      if(operation == '-') b--;
      else if(operation == '+') b++;
      if(b > 60 || b < 1) return;
      this.setState({breakTime: b});
    }
    if(this.state.currentType == 'session'){
      this.setState({
        displayTime: s * 60,
      });
    }
    else if(this.state.currentType == 'break'){
      this.setState({
        displayTime: b * 60,
      });
    }
  }
  startStop(e){
    if(this.state.isActive){
      document.querySelector('#start_stop i').innerText = 'play_arrow';
      this.state.timer.cancel();
      this.setState({isActive: false});
    }
    else {
      document.querySelector('#start_stop i').innerText = 'pause';
      this.setState({
        isActive: true,
      });
      this.state.timer = Timer.accurateInterval(this.tick, 1000);
    }
  }
  reset(){
    if(this.state.timer != '') this.state.timer.cancel();
    this.setState({
      breakTime: this.defaultVals[0],
      sessionTime: this.defaultVals[1],
      currentType: 'session',
      displayTime: this.defaultVals[1] * 60,
      start: null,
      isActive: false,
    });
    document.querySelector('#beep').pause();
    document.querySelector('#beep').currentTime = 0;
  }
  restart(){
    this.state.timer.cancel();
    document.querySelector('#start_stop i').innerText = 'play_arrow';
    this.setState({
      displayTime: this.state[this.state.currentType + 'Time'] * 60,
      start: null,
      isActive: false,
    });
  }
  getInfo(){
    console.log(this.state.start);
  }
  formatDisplayTime(){
    let mins = Math.floor(this.state.displayTime / 60);
    let secs = this.state.displayTime % 60;
    if(mins < 10 ) mins = '0' + mins.toString();
    if(secs < 10) secs = '0' + secs.toString();
    return mins + ':' + secs;
  }

  render(){
    return (
      <div id='clock'>
        <h2>Pomodoro Clock</h2>
        <Settings  
          breakTime={this.state.breakTime} 
          sessionTime={this.state.sessionTime}
          settingsChange={this.handleSettingsChange}
          reset={this.reset}
          toggleShow={this.toggleSettings}
          />
        <div id='main'>
          <div className='circleDisplay'>
            <label id='timer-label'>{this.state.currentType}</label>
            <label id='time-left'>{this.formatDisplayTime()}</label>
            <audio id='beep'><source src='http://soundbible.com/mp3/Electronic_Chime-KevanGC-495939803.mp3' type='audio/mpeg' /></audio>
          </div>
        </div>
        <div className='controls'>
          <button className='btn' onClick={this.restart} id='restart'>
            <i className="material-icons">replay</i>
          </button>
          <button className='btn btn-main' onClick={this.startStop} id='start_stop'>
            <i className="material-icons">play_arrow</i>
          </button>
          <button className='btn' onClick={this.getInfo} id='info'>
            <i className="material-icons">info</i>
          </button>
        </div>
        <div className='credits'>
          Created by Jarick Geiselmayr
        </div>
      </div>
    );
  }
}