export default function col(props){
    return(
        <div className="container">
            <h3 className="text-red">col.js</h3>
            <div className="row alert-primary">
                <div className="col">1列目</div>
                <div className="col">2列目</div>
                <div className="col">3列目</div>
            </div>
            <div className="row alert-success">
                <div className="col-2">1列目col-2</div>
                <div className="col-6">2列目col-6</div>
                <div className="col">3列目col</div>
            </div>

            <div className="row alert-secondary">
                <div className="col-sm-2">col-sm-2</div>
                <div className="col-md-6">col-md-6</div>
                <div className="col-lg-4">col-lg-4</div>
            </div>
            <hr/>
            <div className=" row justify-content-center">
                <div className="col-sm-3 bg-primary">col-sm-3</div>
                <div className="col-sm-3 bg-secondary">col-sm-3</div>
            </div>
        </div>
    )
}