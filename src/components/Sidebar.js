import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/traininglogs">Training Logs</Link>
          </li>
          <li>
            <Link to="/animal">Animal</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
