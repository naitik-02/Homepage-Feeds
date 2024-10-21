import { Plus } from 'lucide-react';


export const SidebarSection = ({ title, children, addNewText }) => (
  <div className="mb-6  overflow-auto">
    <div className="flex justify-between  items-center mb-2">
      <h2 className="font-semibold text-gray-800">{title}</h2>
      <button className="text-blue-500 hover:text-blue-600 text-[11px] flex items-center">
        <Plus size={10} className="mr-1" />
        {addNewText}
      </button>
    </div>
    {children}
    <button className="text-sm text-gray-500 hover:text-gray-700 mt-2">
      Show All
    </button>
  </div>
);
