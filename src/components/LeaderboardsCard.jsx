import React from 'react';
import { Card } from 'flowbite-react';
import { HiTrophy } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetLeaderboard } from '../states/leaderboard/action.js';

export default function LeaderboardsCard() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(asyncGetLeaderboard());
  }, [dispatch]);
  return (
    <Card className="max-w-[800px] min-w-[700px] max-h-min mx-auto dark:bg-forum-dark-primary dark:text-white">
      <section className="flex flex-row items-center gap-1.5 justify-center text-2xl border-b-gray-500 dark:border-b-white border-b pb-4">
        <h2>
          Leaderboards
        </h2>
        {' '}
        <HiTrophy />
      </section>
      <section className="mt-4 p-1.5 flex flex-col gap-4">
        {
          leaderboards.map((leaderboard) => {
            const { user, score } = leaderboard;
            return (
              <section
                key={user.id}
                className="flex flex-row gap-4 rounded-md justify-between dark:text-white border-b-gray-500 dark:border-b-white border-b pb-2"
              >
                <p className="items-center font-bold italic flex flex-row gap-1.5">
                  {user.avatar && <img src={user.avatar} className="rounded-full h-5" alt={user.name} />}
                  {user.name}
                </p>
                <p className="text-sm">
                  {score}
                </p>
              </section>
            );
          })
        }
      </section>
    </Card>
  );
}
