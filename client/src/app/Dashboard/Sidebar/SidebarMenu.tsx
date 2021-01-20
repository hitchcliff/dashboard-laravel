import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePattern } from '../../../routes/Route.pattern';

const links = 'text-lg font-semibold mb-2 text-green-100 block outline-none';
const icon = 'mr-2 w-6 h-6 text-green-500';

interface Menu {
  name: string;
  icon: JSX.Element;
  links?: string[] | any;
  to: { first: string; second: string };
}

const SideMenu: Menu[] = [
  {
    name: 'Users',
    icon: (
      <svg
        className={icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    ),
    links: { first: 'All Users', second: 'Create User' },
    to: { first: RoutePattern.Users, second: '' },
  },
  {
    name: 'Posts',
    icon: (
      <svg
        className={icon}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    links: { first: 'All Posts', second: 'Create Post' },
    to: { first: RoutePattern.Users, second: '' },
  },
  {
    name: 'Categories',
    icon: (
      <svg
        className={icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
      </svg>
    ),
    links: { first: 'All Categories', second: 'Create Category' },
    to: { first: RoutePattern.Users, second: '' },
  },
  {
    name: 'Media',
    icon: (
      <svg
        className={icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
      </svg>
    ),
    links: { first: 'All Media', second: 'Upload Media' },
    to: { first: RoutePattern.Users, second: '' },
  },
  {
    name: 'Charts',
    icon: (
      <svg
        className={icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
    links: { first: 'All Charts', second: 'Create Chart' },
    to: { first: RoutePattern.Users, second: '' },
  },
  {
    name: 'Tables',
    icon: (
      <svg
        className={icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
          clipRule="evenodd"
        />
      </svg>
    ),
    to: { first: RoutePattern.Users, second: '' },
  },
  {
    name: 'Forms',
    icon: (
      <svg
        className={icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
      </svg>
    ),
    to: { first: RoutePattern.Users, second: '' },
  },
];

export default function SidebarMenu() {
  const [currentIdx, setCurrentIdx] = useState<number>();

  const mapItems = SideMenu.map((item, idx) => (
    <div key={idx} className="w-full">
      <button
        className="flex flex-row items-center p-8 w-full  border-b outline-none focus:outline-none focus:border-green-300 hover:bg-green-900 active:bg-green-900"
        onClick={() => setCurrentIdx(idx)}
      >
        {item.icon}
        <p className="font-semibold text-green-100">{item.name}</p>
        {item.links && (
          <div className="ml-auto">
            <div className={currentIdx === idx ? 'hidden' : 'block'}>
              <svg
                className="w-6 h-6 ml-auto text-green-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={currentIdx !== idx ? 'hidden' : 'block ml-auto'}>
              <svg
                className="w-6 h-6 text-green-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}
      </button>
      <div className={currentIdx === idx ? 'block p-8' : 'hidden'}>
        <Link to={item.to.first} className={links}>
          {item.links && item.links.first}
        </Link>
        <Link to={item.to.second} className={links}>
          {item.links && item.links.second}
        </Link>
      </div>
    </div>
  ));

  return <>{mapItems}</>;
}
