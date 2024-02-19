import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CreateThreadCard from './CreateThreadCard';
import Threads from '../pages/Threads';

export default function Dashboard() {
  const { threadList, authUser } = useOutletContext();

  return (
    <span className="grid grid-rows-2 gap-4">
      {
        authUser && (
          <CreateThreadCard />
        )
      }
      <Threads threads={threadList} />
    </span>
  );
}
