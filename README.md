# react-textarea-counter

[![NPM][npm-img]][npm-url]
[![Build Status][build-status-img]][build-status-url]
[![Code Style][code-style-img]][code-style-url]

[npm-url]: https://www.npmjs.com/package/react-textarea-counter
[npm-img]: https://img.shields.io/npm/v/react-textarea-counter.svg
[code-style-url]: https://github.com/prettier/prettier
[code-style-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[build-status-url]: https://travis-ci.org/diogocapela/react-textarea-counter
[build-status-img]: https://travis-ci.org/diogocapela/react-textarea-counter.svg?branch=master

Basic textarea character counter React component.

## Installation

```bash
npm i react-textarea-counter --save
```

## Usage

```jsx
import React from 'react';
import TextareaCounter from 'react-textarea-counter';

export default function MyComponent() {
  return <TextareaCounter countLimit={25} initialValue="Hello World!" />;
}
```

## Props

| Property         | Type     | Default    | Description                                                                                   |
| ---------------- | -------- | ---------- | --------------------------------------------------------------------------------------------- |
| `showCount`      | `bool`   | `true`     | If you want to show the counter or to hide it.                                                |
| `countLimit`     | `number` | `25`       | The max number of characters on the counter.                                                  |
| `countDirection` | `string` | `asc`      | If it should count from the `countLimit` to zero set to `desc` otherwise set it to `asc`.     |
| `countPosition`  | `string` | `right`    | Position of the counter on the bottom of the textarea.                                        |
| `shouldTruncate` | `string` | `true`     | If you want to allow the user to insert more characters than the `countLimit` set to `false`. |
| `initialValue`   | `string` |            | The default initial value on the textarea element.                                            |
| `rows`           | `number` | `6`        | The number of rows of the textarea element.                                                   |
| `resize`         | `string` | `vertical` | Resize attribute of the textarea element. Can be `none`, `both`, `horizontal` or `vertical`.  |
| `placeholder`    | `string` |            | Placeholder of the textarea element.                                                          |
| `onChange`       | `func`   |            | Callback function on the `onChange` event.                                                    |
| `onFocus`        | `func`   |            | Callback function on the `onFocus` event.                                                     |
| `onBlur`         | `func`   |            | Callback function on the `onBlur` event.                                                      |
| `required`       | `bool`   | `false`    | Required attribute of the textarea element.                                                   |
| `disabled`       | `bool`   | `false`    | Disabled attribute of the textarea element.                                                   |

## License

Open source under the terms of the [MIT License](/LICENSE).

Made by [Diogo Capela](https://diogocapela.com).
