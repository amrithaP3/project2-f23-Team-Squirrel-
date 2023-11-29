// pages/traininglogs.js

import Link from 'next/link';

const TrainingLogs = () => {
  return (
    <div>
      <Link href="/createlog">
        Create Log
      </Link>
      <br></br>
      <Link href="/animals">
        Animals Dashboard here
      </Link>
      {/* Display existing logs or any other content related to training logs */}
    </div>
  );
};

export default TrainingLogs;


