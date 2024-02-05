import React from 'react';
import { Link } from 'react-router-dom';

function CategoryLink({ hierarchicalParent }) {
  return (
    <li>
      <Link to={`/category/${hierarchicalParent}`}>{hierarchicalParent}</Link>
    </li>
  );
}

export default CategoryLink;
