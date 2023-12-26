import React from 'react';
import { Link } from 'react-router-dom';


export function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to DietAppBot!</h1>
      <p className="text-lg">Get started by navigating to the other pages:</p>
      <ul className="mt-4">
        <li className="text-blue-500 hover:text-blue-700">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-700">
          <Link to="/tasks">Tasks</Link>
        </li>
        <li className="text-blue-500 hover:text-blue-700">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}