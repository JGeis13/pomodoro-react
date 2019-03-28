(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6CmU":function(e,t,a){a("LzdP"),e.exports=a("WEpk").Date.now},Cg2A:function(e,t,a){e.exports=a("6CmU")},LzdP:function(e,t,a){var i=a("Y7ZC");i(i.S,"Date",{now:function(){return(new Date).getTime()}})},RNiq:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),s=a.n(i),n=a("PgRs"),r=a.n(n),l=a("Cg2A"),c=a.n(l),o=a("0iUn"),u=a("sLSF"),m=a("MI3g"),h=a("a7VT"),d=a("Tit0");function p(e){return s.a.createElement("div",{className:"type-settings"},s.a.createElement("label",{id:e.type+"-label"},e.type+" length"),s.a.createElement("div",{className:"inc-dec"},s.a.createElement("input",{className:"btn",onClick:function(t){return e.changeFunc(e.type,"-")},type:"button",id:e.type+"-decrement",value:"-"}),s.a.createElement("div",{id:e.type+"-length"},e.val),s.a.createElement("input",{className:"btn",onClick:function(t){return e.changeFunc(e.type,"+")},type:"button",id:e.type+"-increment",value:"+"})))}function f(e){return s.a.createElement("div",{id:"settings",className:"closed"},s.a.createElement("div",{className:"material-icons",onClick:e.toggleShow},"settings"),s.a.createElement(p,{type:"break",val:e.breakTime,changeFunc:e.settingsChange}),s.a.createElement(p,{type:"session",val:e.sessionTime,changeFunc:e.settingsChange}),s.a.createElement("button",{id:"reset",onClick:e.reset},"Restore Defaults"))}var y=new Object;y.accurateInterval=function(e,t){var a,i,s,n;return i=(new Date).getTime()+t,s=null,n=function(){return i+=t,s=setTimeout(n,i-(new Date).getTime()),e()},a=function(){return clearTimeout(s)},s=setTimeout(n,i-(new Date).getTime()),{cancel:a}};var g=y,v=function(e){function t(e){var a;return Object(o.default)(this,t),(a=Object(m.default)(this,Object(h.default)(t).call(this,e))).defaultVals=[5,25],a.state={breakTime:a.defaultVals[0],sessionTime:a.defaultVals[1],currentType:"session",displayTime:60*a.defaultVals[1],start:null,timer:"",isActive:!1},a.bindThis(),a}return Object(d.default)(t,e),Object(u.default)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmout",value:function(){this.state.timer.cancel()}},{key:"bindThis",value:function(){this.startStop=this.startStop.bind(this),this.reset=this.reset.bind(this),this.getInfo=this.getInfo.bind(this),this.tick=this.tick.bind(this),this.handleSettingsChange=this.handleSettingsChange.bind(this),this.restart=this.restart.bind(this)}},{key:"tick",value:function(){var e=this.state.displayTime-1;if(this.setState({displayTime:e}),0==e&&document.querySelector("#beep").play(),e<0)return this.switchModes()}},{key:"toggleSettings",value:function(e){var t=e.target;t.parentNode.classList.toggle("closed")?(t.style.transform="translateX(-311px) rotate(360deg)",t.innerText="settings",t.style.color="var(--secondary-color)"):(t.style.transform="translateX(0px) rotate(0deg)",t.innerText="clear",t.style.color="var(--tertiary-color)")}},{key:"switchModes",value:function(){this.state.timer.cancel();var e="session"==this.state.currentType?"break":"session";this.setState(function(t){return{currentType:e,displayTime:60*t[e+"Time"],start:c()(),isActive:!0}}),this.state.timer=g.accurateInterval(this.tick,1e3)}},{key:"handleSettingsChange",value:function(e,t){if(!this.state.isActive){var a=this.state.sessionTime,i=this.state.breakTime;if("session"==e){if("-"==t?a--:"+"==t&&a++,a>60||a<1)return;this.setState({sessionTime:a})}else if("break"==e){if("-"==t?i--:"+"==t&&i++,i>60||i<1)return;this.setState({breakTime:i})}"session"==this.state.currentType?this.setState({displayTime:60*a}):"break"==this.state.currentType&&this.setState({displayTime:60*i})}}},{key:"startStop",value:function(e){this.state.isActive?(document.querySelector("#start_stop i").innerText="play_arrow",this.state.timer.cancel(),this.setState({isActive:!1})):(document.querySelector("#start_stop i").innerText="pause",this.setState({isActive:!0}),this.state.timer=g.accurateInterval(this.tick,1e3))}},{key:"reset",value:function(){""!=this.state.timer&&this.state.timer.cancel(),this.setState({breakTime:this.defaultVals[0],sessionTime:this.defaultVals[1],currentType:"session",displayTime:60*this.defaultVals[1],start:null,isActive:!1}),document.querySelector("#beep").pause(),document.querySelector("#beep").currentTime=0}},{key:"restart",value:function(){this.state.timer.cancel(),document.querySelector("#start_stop i").innerText="play_arrow",this.setState({displayTime:60*this.state[this.state.currentType+"Time"],start:null,isActive:!1})}},{key:"getInfo",value:function(){console.log(this.state.start)}},{key:"formatDisplayTime",value:function(){var e=Math.floor(this.state.displayTime/60),t=this.state.displayTime%60;return e<10&&(e="0"+e.toString()),t<10&&(t="0"+t.toString()),e+":"+t}},{key:"render",value:function(){return s.a.createElement("div",{id:"clock"},s.a.createElement("h2",null,"Pomodoro Clock"),s.a.createElement(f,{breakTime:this.state.breakTime,sessionTime:this.state.sessionTime,settingsChange:this.handleSettingsChange,reset:this.reset,toggleShow:this.toggleSettings}),s.a.createElement("div",{id:"main"},s.a.createElement("div",{className:"circleDisplay"},s.a.createElement("label",{id:"timer-label"},this.state.currentType),s.a.createElement("label",{id:"time-left"},this.formatDisplayTime()),s.a.createElement("audio",{id:"beep"},s.a.createElement("source",{src:"http://soundbible.com/mp3/Electronic_Chime-KevanGC-495939803.mp3",type:"audio/mpeg"})))),s.a.createElement("div",{className:"controls"},s.a.createElement("button",{className:"btn",onClick:this.restart,id:"restart"},s.a.createElement("i",{className:"material-icons"},"replay")),s.a.createElement("button",{className:"btn btn-main",onClick:this.startStop,id:"start_stop"},s.a.createElement("i",{className:"material-icons"},"play_arrow")),s.a.createElement("button",{className:"btn",onClick:this.getInfo,id:"info"},s.a.createElement("i",{className:"material-icons"},"info"))),s.a.createElement("div",{className:"credits"},"Created by Jarick Geiselmayr"))}}]),t}(i.Component);a("00et"),a("9LTe");function T(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,null,s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans:200,400,500",rel:"stylesheet"}),s.a.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css",rel:"stylesheet"})),s.a.createElement("div",{id:"root"},s.a.createElement(v,null)))}a.d(t,"default",function(){return T})},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0,6]]]);