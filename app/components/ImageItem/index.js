/**
 *
 * ImageItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { get } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faTrash,
  faEdit,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';

import './image-item.scss';

function ImageItem({ item, likeItem, removeItem }) {
  const renderActions = () => {
    if (item.isRemoved)
      return (
        <div className="actions">
          <button
            type="button"
            className="undo-btn"
            onClick={() => removeItem(item.href)}
          >
            <FontAwesomeIcon icon={faUndo} />
            Undo
          </button>
        </div>
      );

    return (
      <div className="actions">
        <button
          className={classNames({ active: item.isLiked })}
          type="button"
          onClick={() => likeItem(item.href)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button type="button" onClick={() => removeItem(item.href)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    );
  };

  return (
    <div className="item-container">
      <img
        src={get(item, ['links', 0, 'href'])}
        alt={get(item, ['data', 0, 'title'])}
      />
      <h2>{get(item, ['data', 0, 'title'])}</h2>
      {renderActions()}
    </div>
  );
}

ImageItem.propTypes = {
  item: PropTypes.object,
  likeItem: PropTypes.func,
  removeItem: PropTypes.func,
};

export default ImageItem;
