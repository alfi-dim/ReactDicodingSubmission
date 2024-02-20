import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import TrendingCategoryCard from '../components/TrendingCategoryCard';
import { asyncPopulateThreads } from '../states/shared/action';
import Top5LeaderboardSideCard from '../components/Top5LeaderboardSideCard';
import { asyncGetLeaderboard } from '../states/leaderboard/action';

export default function Home() {
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);
  const leaderboards = useSelector((states) => states.leaderboards);
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetLeaderboard());
    dispatch(asyncPopulateThreads());
  }, [dispatch]);
  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));
  const categoryList = [];
  threads.forEach((thread) => {
    const foundCategory = categoryList.find((cat) => cat.name === thread.category);
    if (foundCategory) {
      foundCategory.count += 1;
      return;
    }
    categoryList.push({
      name: thread.category,
      count: 1,
    });
  });

  const top5users = leaderboards.slice(0, 5);

  categoryList.sort((a, b) => b.count - a.count);
  return (
    <main className="bg-forum-background dark:bg-forum-dark-background min-h-screen p-4 grid grid-cols-6">
      <section className="flex flex-col gap-4">
        <TrendingCategoryCard categoryList={categoryList} />
        <Top5LeaderboardSideCard top5Users={top5users} />
      </section>
      <section className="col-span-5">
        <Outlet context={{ threadList, authUser }} />
      </section>
    </main>
  );
}
