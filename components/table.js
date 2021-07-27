import Head from 'next/head'

export default function Table(props){
    return(
        <div className="container">
            <h4>-table.js-</h4>
          <table className="table table-hover">
            <caption>table.js:caption</caption>
            <thead>
              <tr>
                <th scope="col">見出しセル</th>
                <th scope="col">見出しセル</th>
                <th scope="col">見出しセル</th>
                <th scope="col">見出しセル</th>
              </tr>
            </thead>

            <tbody>
              <tr scope="row">
                <th>th</th>
                <td>DataCell</td>
                <td>DataCell</td>
                <td>DataCell</td>
              </tr>
              <tr className="table-info">
                <th>th</th>
                <td>DataCell</td>
                <td>DataCell</td>
                <td>DataCell</td>
              </tr>
              <tr className="table-primary">
                <th>th</th>
                <td>DataCell</td>
                <td>DataCell</td>
                <td>DataCell</td>
              </tr>
              <tr className="table-warning">
                <th>th</th>
                <td>DataCell</td>
                <td>DataCell</td>
                <td>DataCell</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}