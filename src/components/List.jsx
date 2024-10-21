import {  ChevronRight } from 'lucide-react';


export const ListItem = ({ icon, text, rightIcon }) => (
  <div className="flex items-center py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
      {icon}
    </div>
    <span className="text-sm text-gray-700 flex-grow">{text}</span>
    {rightIcon && <ChevronRight size={16} className="text-gray-400" />}
  </div>
);
