import { useState } from "react";
import { testData2, testMaxDate } from "../constants/testData";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const data = [{name: 'Page A', uv: 500}, {name: 'Page B', uv: 300}, {name: 'Page C', uv: 200}, {name: 'Page D', uv: 400}];

const renderLineChart = () => (
  <div style={{height: '200px', width: '100%'}}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const Transactions = () => {
  const [currentDate, setCurrentDate] = useState<string>(new Date().toString())
  const calculateDateDiff = (dateString1: string, dateString2: string): number => {
    let d1 = new Date(dateString1);
    let d2 = new Date(dateString2);
    return Math.floor((d1.getTime() - d2.getTime()) / 1000 / 60 / 60 / 24);
  }
  return (
    <div>
      <h2>Let's have a look at your transactions!</h2>
      <p>
      Max date in the transaction database: {testMaxDate}.  It's been {calculateDateDiff(currentDate, testMaxDate)} days since you last updated your transactions. The most recent transactions are below. Please upload your latest transactions.
      </p>
      {
        renderLineChart()
      }
      <table id='transaction-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Transaction Amount</th>
            <th>Primary Category</th>
          </tr>
        </thead>
        <tbody>
          {
            testData2.map((data) => {
              return (
                <tr key={data.id}>
                  <td>
                    {data.transactionDate}
                  </td>
                  <td>
                    {data.description}
                  </td>
                  <td>
                    {data.transactionAmount}
                  </td>
                  <td>
                    {data.primaryCategory}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Transactions;