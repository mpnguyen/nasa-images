/**
 *
 * DataList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from 'components/ImageItem/Loadable';
import './data-list.scss';

function DataList({ data }) {
  return (
    <div className="data-list-container">
      {data.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ImageItem key={index} item={item} />
      ))}
    </div>
  );
}

DataList.propTypes = { data: PropTypes.array };

export default DataList;
