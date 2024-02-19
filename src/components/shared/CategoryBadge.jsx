import React from 'react';
import { Badge } from 'flowbite-react';
import PropTypes from 'prop-types';

export default function CategoryBadge({ category }) {
  return (
    <span>
      <Badge color="info" className="w-fit">
        {category}
      </Badge>
    </span>
  );
}

CategoryBadge.defaultProps = {
  category: 'General',
};

CategoryBadge.propTypes = {
  category: PropTypes.string,
};
