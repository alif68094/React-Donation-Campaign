import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, } from 'recharts';

const Statistics = () => {
    const [values, setValues] = useState();
    const [datas, setDatas] = useState('');
    useEffect(()=>{
        const donatedCategory = JSON.parse(localStorage.getItem('donations'))
        if (donatedCategory) {
            setValues(donatedCategory.length);
        }
        else {
            setDatas("You haven't Donated Yet")
        }
    },[]) 
    const data = [
        { name: 'Your Donation', value: values },
        { name: 'Total Donation', value: 12 },
    ];
    const COLORS = ['#00C49F', '#FF444A'];
 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };
    return (
        <>
        <div>
            {
                datas? <p className='text-center mt-9'>{datas}</p> : <div>
                <div className=" text-center">
                    
                    <div className=" w-2/3 md:w-1/3 lg:w-1/3 mx-auto flex lg:items-center lg:justify-center ">
                        <ResponsiveContainer width={300} height={300} className="text-center">
                            <PieChart width={700} height={700}>
                               
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend layout="horizontal" verticalAlign="center" align="center" />
                            </PieChart>
                           
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            }
        </div>
    </>

    );
};

export default Statistics;
