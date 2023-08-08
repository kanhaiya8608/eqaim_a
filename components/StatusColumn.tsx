// components/StatusColumn.tsx
import {GoDotFill} from 'react-icons/go'
import React from 'react';
import {BiChevronUp} from 'react-icons/bi'
import {FaComment} from 'react-icons/fa'
import {StatusColumnProps} from '../data/types';

const getStatusText = (status: string): string => {
    const statusTextMap: { [key: string]: string } = {
      planned: 'Ideas prioritized for Research',
      'in-progress': 'Currently being developed',
      live: 'Released features',
    };
  
    return statusTextMap[status] || status;
  };
const StatusColumn: React.FC<StatusColumnProps> = ({ data, status, borderColor, textColor }) => {
    const statusItems = data.productRequests;

  return (
    <div className="w-full md:w-1/3 p-4 ${status === 'planned' ? 'mobile-tabs' : ''}`}">
      <h2 className="capitalize text-slate-600 text-xl font-bold">{status} ({statusItems.length})</h2>
      <p className="text-slate-500 mb-4">{getStatusText(status)}</p>
      {statusItems.filter(item => item.status === status).map(item => (
        <div key={item.id} className={`mb-4 p-8 bg-white shadow rounded ${borderColor}`}>
            <p className="flex flex-row  items-center capitalize text-gray-600"><GoDotFill className={`${textColor} h-3 mr-2 my-2`}/>{status} </p>
          <h3 className="cursor-pointer text-lg hover:text-indigo-600 font-bold mb-2">{item.title}</h3>
          <p className="text-slate-500">{item.description}</p>
          <button className='capitalize p-2 my-2 bg-violet-50 rounded-lg text-indigo-600 text-xs font-bold'>{item.category}</button>
        <div className='flex  justify-between items-center'>
        <button className='flex flex-row items-center  bg-violet-50 active:bg-indigo-600 active:text-white hover:bg-indigo-200 cursor: pointer rounded-lg text-center text-slate-600 text-xs font-bold p-2'><BiChevronUp size={20} className=" font-bolder mr-2"/>{item.upvotes}</button>
        <button className='flex items-center rounded-lg text-center text-xs font-bold'><FaComment className="text-slate-300 font-bolder bg-color-red mr-2"/><span className='text-slate-600'>6</span></button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default StatusColumn;
