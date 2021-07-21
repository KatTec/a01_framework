import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'
import Table from './table'

export default function Layout(props) {
  return (
    <div>
      <div>-layout.js-</div>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      </Head>

      <Header header={props.header} />

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
