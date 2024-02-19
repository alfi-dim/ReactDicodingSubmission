'use client';

import React from 'react';
import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';
import useFilter from '../hooks/useFilter';

export default function TrendingCategoryCard({ categoryList }) {
  const { setFilter } = useFilter();
  const onClickHandler = (e) => {
    setFilter(e.target.innerText);
  };
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight dark:text-white border-b border-b-gray-500 pb-2">
        Trending Category
      </h5>
      <section className="dark:text-white">
        {
          categoryList.map((category) => (
            <span key={category.name}>
              <button
                type="button"
                aria-label="category button"
                value={category.name}
                onClick={onClickHandler}
              >
                <p className="text-sm font-bold italic underline">
                  #
                  {category.name}
                </p>
              </button>
              <p className="text-xs">
                {category.count}
                {' '}
                threads
              </p>
            </span>
          ))
        }
      </section>
    </Card>
  );
}

TrendingCategoryCard.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    count: PropTypes.number,
  })).isRequired,
};
