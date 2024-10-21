import React from 'react';
import { 
  Users, Folder, CheckSquare, PieChart, Layers, Rocket,
  Phone, Mail, MapPin, Plus, MoreHorizontal
} from 'lucide-react';

const Card = ({ title, children, className }) => (
  <div className={`bg-white rounded-lg shadow-sm p-4 ${className}`}>
    <h2 className="font-semibold text-lg mb-4 text-gray-800">{title}</h2>
    {children}
  </div>
);

const ProgressBar = ({ label, percentage, color }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-700">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const ContactItem = ({ name, role, avatar }) => (
  <div className="flex items-center mb-3">
    <img src={avatar} alt={name} className="w-15 h-10 rounded-full mr-3" />
    <div>
      <p className="font-medium text-gray-800">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const TaskItem = ({ task, completed }) => (
  <div className="flex items-center mb-2">
    <input type="checkbox" checked={completed} className="mr-2" readOnly />
    <span className={`text-sm ${completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>{task}</span>
  </div>
);

const ProjectItem = ({ name, progress, color }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <span className="text-sm font-medium text-gray-700">{progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

export const ComprehensiveDashboard = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Contacts" className="col-span-1 row-span-2">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">Recently Active</span>
          <button className="text-green-500 hover:text-green-600">
            <Plus size={20} />
          </button>
        </div>
        <ContactItem name="Jenny Wilson" role="UI Designer" avatar="/api/placeholder/40/40" />
        <ContactItem name="Robert Fox" role="Web Developer" avatar="/api/placeholder/40/40" />
        <ContactItem name="Esther Howard" role="Project Manager" avatar="/api/placeholder/40/40" />
        <button className="text-green-500 hover:text-green-600 text-sm mt-2">View all contacts</button>
      </Card>

      <Card title="Tasks" className="col-span-1 row-span-1">
        <TaskItem task="Design new dashboard layout" completed={false} />
        <TaskItem task="Review project proposals" completed={true} />
        <TaskItem task="Schedule team meeting" completed={false} />
        <button className="text-green-500 hover:text-green-600 text-sm mt-2">Add new task</button>
      </Card>

      <Card title="Progress" className="col-span-1 row-span-1">
        <ProgressBar label="Project Completion" percentage={75} color="bg-blue-500" />
        <ProgressBar label="Task Efficiency" percentage={60} color="bg-green-500" />
        <ProgressBar label="Team Collaboration" percentage={90} color="bg-purple-500" />
      </Card>

      <Card title="Boards" className="col-span-1 row-span-1">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <PieChart className="mx-auto mb-2" size={24} />
            <p className="text-sm font-medium">Impact Reporting</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <Layers className="mx-auto mb-2" size={24} />
            <p className="text-sm font-medium">Attendance Reporting</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <Rocket className="mx-auto mb-2" size={24} />
            <p className="text-sm font-medium">OKRs 1995</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg text-center">
            <Plus className="mx-auto mb-2" size={24} />
            <p className="text-sm font-medium">Add New Board</p>
          </div>
        </div>
      </Card>

      <Card title="Albums" className="col-span-1 row-span-1">
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <Folder size={24} className="text-gray-400" />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <Folder size={24} className="text-gray-400" />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <Plus size={24} className="text-gray-400" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium">1971 Portfolio</p>
          <p className="text-sm font-medium mt-2">AI Partners</p>
        </div>
      </Card>

      <Card title="Projects" className="col-span-1 row-span-2">
        <ProjectItem name="Website Redesign" progress={80} color="bg-blue-500" />
        <ProjectItem name="Mobile App Development" progress={60} color="bg-green-500" />
        <ProjectItem name="Marketing Campaign" progress={40} color="bg-yellow-500" />
        <ProjectItem name="Product Launch" progress={20} color="bg-red-500" />
        <button className="text-green-500 hover:text-green-600 text-sm mt-2">View all projects</button>
      </Card>
    </div>
  </div>
);