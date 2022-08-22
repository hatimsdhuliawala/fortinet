'use strict';

import './style.css'

const displayOutageData = (props) => {
  const {userData, nextPreviousPageClick, prevUrl, nextUrl} = props;

    return (
      <div>
        <table >
          <thead>
            <tr>
              <th className="border-styling"> {'ID'} </th>
              <th className="border-styling"> {'Server Name'} </th>
              <th className="border-styling"> {'Description'} </th>
              <th className="border-styling"> {'Start Time'} </th>
              <th className="border-styling"> {'End Time'} </th>
              <th className="border-styling"> {'Status'} </th>
              <th className="border-styling"> {'Severity'} </th>
              <th className="border-styling"> {'Has Active Maintenance'} </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="border-styling">{data.server_id}</td>
                  <td className="border-styling">{data.server_name}</td>
                  <td className="border-styling">{data.description ? data.description : 'No data Available'}</td>
                  <td className="border-styling">{data.start_time}</td>
                  <td className="border-styling">{data.end_time}</td>
                  <td className="border-styling">{data.status}</td>
                  <td className="border-styling">{data.severity}</td>
                  <td className="border-styling">{data.has_active_maintenance.toString()}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button onClick={() => nextPreviousPageClick(nextUrl)} disabled={!nextUrl} >
          Next
        </button>
        <button onClick={() => nextPreviousPageClick(prevUrl)} disabled={!prevUrl}>
          Previous
        </button>
      </div>
    )
}

export default displayOutageData;
