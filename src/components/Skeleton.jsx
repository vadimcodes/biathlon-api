import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="products__items"
    speed={2}
    width={285}
    height={375}
    viewBox="0 0 285 375"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="183" y="278" rx="0" ry="0" width="35" height="1" />
    <rect x="12" y="12" rx="8" ry="8" width="259" height="194" />
    <rect x="12" y="221" rx="8" ry="8" width="259" height="42" />
    <rect x="12" y="276" rx="8" ry="8" width="103" height="49" />
    <rect x="132" y="276" rx="8" ry="8" width="137" height="49" />
  </ContentLoader>
);

export default Skeleton;
