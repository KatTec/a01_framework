export default function nav(props){
    return(
        <div className="container-fluid">
            <h3>nav.js</h3>
            <ul className="nav">
                <li className="nav-item"><a className="nav-link" href="#">aリンク</a></li>
                <li className="nav-item"><a className="nav-link" href="#" active>bアクティブ</a></li>
                <li className="nav-item"><a className="nav-link" href="#" disable>c無効</a></li>
            </ul>

        </div>
    )
}
