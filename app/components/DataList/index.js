/**
 *
 * DataList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import ImageItem from 'components/ImageItem/Loadable';

import './data-list.scss';

function DataList({ data, likeItem, removeItem, showItemForm }) {
  if (data.length === 0) {
    return (
      <div className="data-list-container empty">
        <FontAwesomeIcon size="4x" icon={faList} />
        <span>Empty list</span>
      </div>
    );
  }

  return (
    <div className="data-list-container">
      {data.map(item => (
        <ImageItem
          key={item.href}
          item={item}
          likeItem={likeItem}
          removeItem={removeItem}
          showItemForm={showItemForm}
        />
      ))}
    </div>
  );
}

DataList.propTypes = {
  data: PropTypes.array,
  likeItem: PropTypes.func,
  removeItem: PropTypes.func,
  showItemForm: PropTypes.func,
};

export default DataList;
