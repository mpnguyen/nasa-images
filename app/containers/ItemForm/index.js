/**
 *
 * ItemForm
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import get from 'lodash/get';

import { useInjectReducer } from 'utils/injectReducer';
import Modal from 'components/Modal';
import makeSelectItemForm from './selectors';
import reducer from './reducer';
import { hideItemFormRequest } from './actions';
import { updateItemRequest } from '../All/actions';

import './item-form.scss';

export function ItemForm({ itemForm, hideItemForm, updateItem }) {
  useInjectReducer({ key: 'itemForm', reducer });
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (itemForm.isVisible) {
      setTitle(get(itemForm.currentItem, ['data', 0, 'title']));
      setUrl(get(itemForm.currentItem, ['links', 0, 'href']));
    }
  }, [itemForm.isVisible]);

  return (
    <Modal isVisible={itemForm.isVisible} onRequestClose={hideItemForm}>
      <div className="item-form-container">
        <input
          placeholder="Thumbnail URL..."
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <input
          placeholder="Title..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <div className="actions">
          <button
            type="button"
            className="action-btn"
            onClick={() => {
              updateItem(itemForm.currentItem.href, title, url);
              hideItemForm();
            }}
          >
            Update
          </button>
          <button
            type="button"
            className="action-btn danger"
            onClick={hideItemForm}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

ItemForm.propTypes = {
  hideItemForm: PropTypes.func.isRequired,
  itemForm: PropTypes.object,
  updateItem: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  itemForm: makeSelectItemForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    hideItemForm: () => dispatch(hideItemFormRequest()),
    updateItem: (href, title, url) =>
      dispatch(updateItemRequest(href, title, url)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ItemForm);
