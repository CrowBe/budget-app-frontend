import { BarChart, Bar, Legend, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface ICustomBarCharProps <T extends string, K extends string, P extends {[key in T]: number | string;} & {[key in K]: number | string}>{
    data : P[], 
    dataKeyX: T, 
    dataKeyY: K
}

const CustomBarChart = <T extends string, K extends string, P extends {[key in T]: number | string;} & {[key in K]: number | string}>({data, dataKeyX, dataKeyY}:ICustomBarCharProps<T, K, P>) => (
    <div style={{height: '200px', width: '100%'}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKeyX} />
          <YAxis />
          <Legend />
          <Bar dataKey={dataKeyY} fill="#8884d8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
);

export default CustomBarChart;