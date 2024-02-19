import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncAddCommentAction } from '../states/shared/action';
import InputTextarea from './shared/InputTextarea';
import FormButton from './shared/FormButton';

export default function AddCommentForm({ isVisible, changeVisible }) {
  const [content, onChangeContent] = useInput('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      content,
    };
    dispatch(asyncAddCommentAction(payload, id));
    changeVisible(false);
  };
  if (isVisible) {
    return (
      <section>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <InputTextarea
            onChange={onChangeContent}
            name="comment"
            label=""
            value={content}
            placeholder="Write a comment..."
            rows="3"
          />
          <FormButton
            type="submit"
            label="Add Comment"
          />
        </form>
      </section>
    );
  }

  return null;
}

AddCommentForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  changeVisible: PropTypes.func.isRequired,
};
