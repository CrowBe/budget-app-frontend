import { LineChart, Line, Legend, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface ICustomLineCharProps <T extends string, K extends string, P extends {[key in T]: number | string;} & {[key in K]: number | string}>{
  data : P[], 
  dataKeyX: T, 
  dataKeyY: K
}
 
const CustomLineChart = <T extends string, K extends string, P extends {[key in T]: number | string;} & {[key in K]: number | string}>({data, dataKeyX, dataKeyY}:ICustomLineCharProps<T, K, P>) => (
  <div style={{height: '200px', width: '100%'}}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={600} height={600} data={data}>
        <Line type="monotone" dataKey={dataKeyY} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey= {dataKeyX} />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CustomLineChart;