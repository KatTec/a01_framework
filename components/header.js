import Link from 'next/link'

export default function Header(props) {
  return (
    <div className="container">
      <h4>-header.js-</h4>
      <h1 className="bg-primary px-3 text-white display-6 text-right">
        {props.header}
      </h1>

      <div className="container ">
        <div className="bg-info text-secondary">
        </div>

        <ul className="nav">
          <li className="nav-item nav-link bg-primary">
            {/* <a className="nav-link bg-primary" href="/">index</a> */}
            <Link href="/"> 
                <a>indexはこちら</a>
            </Link>
          </li>

          <li className="nav-item nav-link bg-secondary">
            {/* <a className="nav-link bg-secondary" href="/page2/page2_hello" active>page2_hello</a> */}
            <Link href="/page2/page2_hello"> 
              <a>page2_helloはこちら</a>
            </Link>
          </li>

          <li className="nav-item nav-link">
            {/* <a className="nav-link bg-warning" href="/navCollect" disable>navCollect</a> */}
            <Link href="/navCollect"> 
              <a>navCollectはこちら</a>
            </Link>
          </li>

          <li className="nav-item nav-link">
            {/* <a className="nav-link bg-warning" href="/###" disable>###</a> */}
            <Link href="/###"> 
              <a>###はこちら</a>
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}
