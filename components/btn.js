export default function btn(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1>GUI Sample</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <form method="post" action="#">
                        <div className="form-group">
                            <input type="submit" className="btn" value="default"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="primary"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-secondary" value="secondary"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="success"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-info" value="info"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-warning" value="warning"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-danger" value="danger"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-light" value="light"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-dark" value="dark"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}