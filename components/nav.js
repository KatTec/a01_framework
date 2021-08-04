export default function nav(props){
    return(
        <div className="container-fluid">
            <h4>-nav.js-</h4>
            <ul className="nav">
                <li className="nav-item"><a className="nav-link" href="#">aリンク</a></li>
                <li className="nav-item"><a className="nav-link" href="#" active>bアクティブ</a></li>
                <li className="nav-item"><a className="nav-link" href="#" disable>c無効</a></li>
            </ul>

            <div className="row">
                <div className="col-12">
                    <h4 className="display-5">h4_display-5</h4>
                    <div className="display-5">div_display-5</div>
                    <hr/>
                    <p className="lead">this is navigation sample page.
                        this is navigation sample page.
                        this is navigation sample page.
                        this is navigation sample page.<br/>
                        this is navigation sample page.
                    </p>
                </div>
            </div>

            <nav className="navbar navbar-dark">xxx</nav>

        </div>
    )
}
