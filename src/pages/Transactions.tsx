import { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import CustomBarChart from "../components/CustomBarChart";
import { testData2, testMaxDate } from "../constants/testData";
import { groupDataByPrimaryCategory, groupDataBySecondaryCategory, groupDataByTertiaryCategory } from "../utils/groupingFunctions";

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
        Max date in the transaction database: {testMaxDate}.  It's been {calculateDateDiff(currentDate, testMaxDate)} 
        days since you last updated your transactions. The most recent transactions are below. Please upload your 
        latest transactions.
      </p>
      {
        <CustomBarChart 
          data={testData2} 
          dataKeyX={'transactionDate'} 
          dataKeyY={'transactionAmount'} 
        />
      }
      {
        <CustomBarChart 
          data={groupDataByPrimaryCategory(testData2)} 
          dataKeyX={'primaryCategory'} 
          dataKeyY={'transactionAmount'} 
        />
      }
      {
        <CustomBarChart 
          data={groupDataBySecondaryCategory(testData2)} 
          dataKeyX={'secondaryCategory'} 
          dataKeyY={'transactionAmount'} 
        />
      }
      {
        <CustomBarChart 
          data={groupDataByTertiaryCategory(testData2)} 
          dataKeyX={'tertiaryCategory'} 
          dataKeyY={'transactionAmount'} 
        />
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