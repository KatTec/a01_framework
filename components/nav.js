export default function nav(props){
    return(
        <div className="container-fluid">
            <h3>nav.js</h3>
            <ul className="nav">
                <li className="nav-item"><a className="nav-link" href="#">aリンク</a></li>
                <li className="nav-item"><a className="nav-link" href="#" active>bアクティブ</a></li>
                <li className="nav-item"><a className="nav-link" href="#" disable>c無効</a></li>
            </ul>

            <div className="row">
                <div className="col-12">
                    <h2 className="display-3">Sample.</h2>
                    <p className="lead">this is navigation sample page.
                        this is navigation sample page.
                        this is navigation sample page.
                        this is navigation sample page.<br/>
                        this is navigation sample page.
                    </p>
                </div>
            </div>

        </div>
    )
}
