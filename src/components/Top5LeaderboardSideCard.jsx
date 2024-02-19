import { Card } from 'flowbite-react';
import React from 'react';
import PropTypes from 'prop-types';

export default function Top5LeaderboardSideCard({ top5Users }) {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight dark:text-white border-b border-b-gray-500 pb-2">
        Top 5 Leaderboard
      </h5>
      <section className="dark:text-white flex flex-col gap-1.5">
        {
              top5Users.map(({ user, score }) => (
                <span key={user.name} className="flex flex-row gap-4 justify-between">
                  <p className="text-xs font-bold italic flex flex-row gap-1.5">
                    {user.avatar && <img src={user.avatar} className="rounded-full h-5" alt={user.name} />}
                    {user.name}
                  </p>
                  <p className="text-xs">
                    {score}
                  </p>
                </span>
              ))
            }
      </section>
    </Card>
  );
}

Top5LeaderboardSideCard.propTypes = {
  top5Users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    avatar: PropTypes.string,
  })).isRequired,
};
