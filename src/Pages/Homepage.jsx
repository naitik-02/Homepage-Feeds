import React from 'react';
import { LeftSidebar } from '../components/LeftSidebar';
import { Newsfeed } from '../components/Newsfeed';
import { RightSidebar } from '../components/RightSidebar';

const Dashboard = () => (
    <div className="flex flex-col  overflow-auto bg-gray-50">
    <div className="flex flex-1 overflow-hidden">
      <LeftSidebar className="w-1/4 lg:w-1/5 bg-white" /> 
      <Newsfeed className="flex-grow w-3/4 bg-gray-100 p-4" />  
      <RightSidebar className="w-1/4 lg:w-1/5 bg-white" /> 
    </div>
  </div>
);

export default Dashboard;