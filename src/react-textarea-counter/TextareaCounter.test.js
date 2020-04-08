import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TextareaCounter from './TextareaCounter';

test('should count correctly when direction is ascending', () => {
  const { getByText, getByTestId } = render(
    <TextareaCounter showCount countLimit={50} countDirection="asc" />
  );

  expect(getByText('0/50')).toBeInTheDocument();
  const textarea = getByTestId('textarea');

  fireEvent.change(textarea, { target: { value: 'This text is 31 characters long' } });

  expect(textarea.value).toBe('This text is 31 characters long');
  expect(textarea.value.length).toBe(31);
  expect(getByText('31/50')).toBeInTheDocument();
});

test('should count correctly when direction is descending', () => {
  const { getByText, getByTestId } = render(
    <TextareaCounter showCount countLimit={50} countDirection="desc" />
  );

  expect(getByText('50/50')).toBeInTheDocument();
  const textarea = getByTestId('textarea');

  fireEvent.change(textarea, { target: { value: 'This text is a big 37 characters long' } });

  expect(textarea.value).toBe('This text is a big 37 characters long');
  expect(textarea.value.length).toBe(37);
  expect(getByText('13/50')).toBeInTheDocument();
});

test('should show a default initial value correctly', () => {
  const { getByText, getByTestId } = render(
    <TextareaCounter showCount countLimit={10} countDirection="asc" initialValue="Hello" />
  );

  const textarea = getByTestId('textarea');
  expect(textarea.value).toBe('Hello');
  expect(textarea.value.length).toBe(5);
  expect(getByText('5/10')).toBeInTheDocument();
});

test('should truncate the text correctly', () => {
  const { getByText, getByTestId } = render(
    <TextareaCounter showCount countLimit={10} countDirection="asc" shouldTruncate={true} />
  );

  expect(getByText('0/10')).toBeInTheDocument();
  const textarea = getByTestId('textarea');

  fireEvent.change(textarea, { target: { value: 'This text is 31 characters long' } });

  expect(textarea.value).toBe('This text ');
  expect(textarea.value.length).toBe(10);
  expect(getByText('10/10')).toBeInTheDocument();
});

test('should truncate a default initial value correctly', () => {
  const { getByText, getByTestId } = render(
    <TextareaCounter showCount countLimit={5} countDirection="asc" initialValue="Hello there" />
  );

  const textarea = getByTestId('textarea');
  expect(textarea.value).toBe('Hello');
  expect(textarea.value.length).toBe(5);
  expect(getByText('5/5')).toBeInTheDocument();
});

test('should overflow the text correctly', () => {
  const { getByText, getByTestId } = render(
    <TextareaCounter showCount countLimit={10} countDirection="desc" shouldTruncate={false} />
  );

  expect(getByText('10/10')).toBeInTheDocument();
  const textarea = getByTestId('textarea');

  fireEvent.change(textarea, { target: { value: 'This text is 26 chars long' } });

  expect(textarea.value).toBe('This text is 26 chars long');
  expect(textarea.value.length).toBe(26);
  expect(getByText('-16/10')).toBeInTheDocument();
});

test('should hide the counter correctly', () => {
  const { queryByText, queryByTestId } = render(
    <TextareaCounter
      showCount={false}
      countLimit={10}
      countDirection="desc"
      shouldTruncate={false}
    />
  );

  expect(queryByTestId('counter')).not.toBeInTheDocument();
  expect(queryByText('10/10')).not.toBeInTheDocument();
});
