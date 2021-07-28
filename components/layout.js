import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="container bg-dark">
      <h3>-layout.js-</h3>
      <Head>
        <title>{props.title}</title>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link> */}
      </Head>

      <Header header={props.header}/>

      <hr/>
      <div className="container">
        <h3 className="my-3 text-primary text-center"> {props.title}</h3>
        <div>以下に、props.childrenとしてindex.jsのreturnを返す</div>
        {props.children}
      </div>
      <hr/>

      <Footer/>
    </div>
  )
}
