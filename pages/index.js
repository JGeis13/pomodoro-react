
import Head from 'next/head'
import Clock from '../components/Clock'
import "../styles/styles.scss"
import "../styles/normalize.scss"

export default function Home(){
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />>
        <title>Pomodoro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href='https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans:200,400,500' rel='stylesheet' />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css' rel='stylesheet' />
      </Head>
      <div id='root'>
        <Clock />
      </div>
    </React.Fragment>
    
  )
}






