import { useState } from 'react';
import SidebarMenu from './SidebarMenu';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-green-600">
      <div className="flex flex-row items-center p-8 bg-green-700">
        <svg className="w-6 h-6 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        <p className="ml-3 inline text-green-100 font-semibold text-xl">Dashboard</p>
      </div>
      <div className="flex flex-col">
        <SidebarMenu />
      </div>
    </div>
  );
}
