import React from 'react';
import { ListItem } from "./List";

const ProgressBar = ({ percentage, color }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
    <div
      className={`h-2.5 rounded-full ${color}`}
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

export const RightSidebar = () => (
  <div className=" p-4 border-l h-screen overflow-auto hidden md:block border-gray-200">
    <div className="mb-6">
      <h2 className="font-semibold text-gray-800 mb-2">Boards</h2>
      <ListItem icon="📊" text="Impact Reporting" />
      <ListItem icon="📋" text="Attendance Reporting" />
      <ListItem icon="🎯" text="OKRs 1995" />
    </div>
    <div className="mb-6">
      <h2 className="font-semibold text-gray-800 mb-2">Personal Progress</h2>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <p className="text-sm text-gray-600 mb-2">Project Completion</p>
        <ProgressBar percentage={75} color="bg-blue-500" />
        <p className="text-sm text-gray-600 mb-2">Task Efficiency</p>
        <ProgressBar percentage={60} color="bg-green-500" />
        <p className="text-sm text-gray-600 mb-2">Team Collaboration</p>
        <ProgressBar percentage={90} color="bg-purple-500" />
      </div>
    </div>
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-800">Tasks</h2>
        <span className="text-xs text-gray-500">22 To Do | 14 Done</span>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-700">follow up call needed</span>
        </div>
        <div className="flex items-center mb-3">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-700">
            contact the local authority
          </span>
        </div>
        <input
          type="text"
          placeholder="Add your next task"
          className="w-full p-2 text-sm border border-gray-300 rounded"
        />
      </div>
    </div>
  </div>
);