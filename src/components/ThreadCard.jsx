'use client';

import React from 'react';
import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils/index';
import CategoryBadge from './shared/CategoryBadge';

export default function ThreadCard({ thread }) {
  const {
    id,
    upVotesBy,
    downVotesBy,
    totalComments,
    title,
    category,
    user,
    createdAt,
  } = thread;

  return (
    <Card className="max-w-[700px] min-w-[700px] max-h-min mx-auto dark:bg-forum-dark-primary dark:text-white">
      <section className="grid grid-cols-4 gap-4 w-full">
        <div className="col-span-1 text-right">
          <p>
            {upVotesBy?.length}
            {' '}
            votes
          </p>
          <p>
            {downVotesBy?.length}
            {' '}
            downvote
          </p>
          <p>
            {totalComments}
            {' '}
            comment
          </p>
        </div>
        <div className="col-span-3 grid grid-rows-2">
          <span>
            <p className="font-normal">
              {title}
            </p>
          </span>
          <span className="grid grid-cols-2">
            <CategoryBadge category={category} />
            <span className="text-xs flex flex-row gap-2.5 justify-end">
              <p className="flex flex-row gap-1.5">
                <img src={user?.avatar} className="rounded-full h-5" alt={user?.name} />
                {user?.name}
              </p>
              <p>
                asked
                {' '}
                {postedAt(createdAt)}
              </p>
            </span>
          </span>
        </div>
      </section>
    </Card>
  );
}

ThreadCard.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string,
    upVotesBy: PropTypes.arrayOf(PropTypes.string),
    downVotesBy: PropTypes.arrayOf(PropTypes.string),
    totalComments: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
    createdAt: PropTypes.string,
  }).isRequired,
};
