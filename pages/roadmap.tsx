import React from 'react'
import { data } from '../data/data'
import {AiOutlineLeft} from 'react-icons/ai'
import StatusColumn from '../components/StatusColumn';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const roadmap = () => {
  return (
    <div className=''>
      <nav className="bg-slate-700 p-4 flex justify-between items-center">
      <div className="flex flex-col items-center">
        <button
          className="flex flex-row justify-between items-center text-white bg-transparent border-none mr-2 hover:underline focus:outline-none"
        >
         <AiOutlineLeft className="h-3 mr-1 text-bolder" />
          Go Back
        </button>
        <h1 className="text-white text-lg font-semibold">Roadmap</h1>
      </div>
      <button className="bg-fuchsia-500 hover:bg-fuchsia-300 text-violet-50 text-sm font-bold rounded-[10px] px-4 py-2 rounded">+ Add Feedback</button>
    </nav>

<Tabs className='md:hidden'>
    <TabList className='flex justify-around'>
      <Tab>Plannned</Tab>
      <Tab>In-Progress</Tab>
      <Tab>live</Tab>
    </TabList>
    <TabPanel>
    <StatusColumn data={data} status="planned" borderColor="border-t-4 border-t-orange-300" textColor="text-orange-300" />
    </TabPanel>
    <TabPanel>
    <StatusColumn data={data} status="in-progress" borderColor="border-t-4 border-t-fuchsia-600" textColor="text-fuchsia-600" />
    </TabPanel>
    <TabPanel>
    <StatusColumn data={data} status="live" borderColor="border-t-4 border-t-blue-400" textColor="text-blue-400" />
    </TabPanel>
  </Tabs>
    <div className="hidden md:flex p-4">
        <StatusColumn data={data} status="planned" borderColor="border-t-4 border-t-orange-300" textColor="text-orange-300" />
        <StatusColumn data={data} status="in-progress" borderColor="border-t-4 border-t-fuchsia-600" textColor="text-fuchsia-600" />
        <StatusColumn data={data} status="live" borderColor="border-t-4 border-t-blue-400" textColor="text-blue-400" />
      </div>
    </div>
  )
}

export default roadmap
