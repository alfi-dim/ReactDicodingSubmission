import React from 'react';
import {
  Card,
} from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';
import { asyncPopulateThreads } from '../states/shared/action';
import InputText from './shared/InputText';
import InputTextarea from './shared/InputTextarea';
import FormButton from './shared/FormButton';

export default function CreateThreadForm() {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [content, onContentChange] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title,
      category,
      body: content,
    };
    dispatch(asyncAddThread(payload, navigate));
    dispatch(asyncPopulateThreads());
  };
  return (
    <Card>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold pb-10 dark:text-white">Create a new thread</h1>
        <form className="flex flex-col gap-1.5" onSubmit={handleSubmit}>
          <InputText
            onChange={onTitleChange}
            name="title"
            label="Title"
            value={title}
            placeholder="Whether today"
          />
          <InputText
            onChange={onCategoryChange}
            name="category"
            label="Category"
            value={category}
            placeholder="story-telling"
          />
          <InputTextarea
            onChange={onContentChange}
            name="content"
            label="Content"
            value={content}
            placeholder="Tell us your story"
          />
          <FormButton
            type="submit"
            label="Create Thread"
          />
        </form>
      </div>
    </Card>
  );
}
