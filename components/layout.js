import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'
import Table from './table'
import Nav from './nav'
import Col from './col'

export default function Layout(props) {
  return (
    <div>
      <h3>-layout.js-</h3>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      </Head>

      <Nav></Nav>

      <Header header={props.header} />

      <Col></Col>
      
      <Table></Table>

      <div className="container">
        <h3 className="my-3 text-primary text-center"> {props.title}</h3>
        <div>以下に、props.childrenとしてindex.jsのreturnを返す</div>
        {props.children}
      </div>

      <Footer footer="copyright SYODA-Tuyano." />

    </div>
  )
}
