/**
 *
 * ImageItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import './image-item.scss';

function ImageItem({ item }) {
  return (
    <div className="item-container">
      <img
        src={get(item, ['links', 0, 'href'])}
        alt={get(item, ['data', 0, 'title'])}
      />
      <h2>{get(item, ['data', 0, 'title'])}</h2>

      <div className="actions">
        <button type="button">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </div>
  );
}

ImageItem.propTypes = {
  item: PropTypes.object,
};

export default ImageItem;
