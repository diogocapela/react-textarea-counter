import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const NEW_LINE_REGEX = /(\r\n|\n|\r)/g;

const TextareaCounter = (props) => {
  const {
    showCount,
    countLimit,
    countDirection,
    countPosition,
    shouldTruncate,
    initialValue,
    rows,
    resize,
    className,
    placeholder,
    onCount,
    onChange,
    onFocus,
    onBlur,
    required,
    disabled,
    ...remainingProps
  } = props;

  const [value, setValue] = useState(
    shouldTruncate ? initialValue.slice(0, countLimit) : initialValue
  );

  const hasOverflowed = countLimit - value.length <= 0;
  const isAscending = countDirection === 'asc';
  const counter = isAscending ? value.length : countLimit - value.length;

  const handleChange = useCallback(
    (event) => {
      let newValue = event.target.value.replace(NEW_LINE_REGEX, '\n');

      if (shouldTruncate) {
        newValue = newValue.slice(0, countLimit);
      }

      event.target.value = newValue;

      setValue(newValue);
      onChange(event);
    },
    [countLimit, onChange, shouldTruncate]
  );

  return (
    <div className={className}>
      <textarea
        data-testid="textarea"
        style={{ width: '100%', resize }}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        {...remainingProps}
      />
      {showCount && (
        <div
          data-testid="counter"
          style={{
            textAlign: countPosition,
            color: hasOverflowed ? 'red' : 'black',
          }}
        >
          {counter}/{countLimit}
        </div>
      )}
    </div>
  );
};

TextareaCounter.propTypes = {
  showCount: PropTypes.bool,
  countLimit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  countDirection: PropTypes.oneOf(['asc', 'desc']),
  countPosition: PropTypes.oneOf(['left', 'right']),
  shouldTruncate: PropTypes.bool,
  initialValue: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextareaCounter.defaultProps = {
  showCount: true,
  countLimit: 25,
  countDirection: 'asc',
  countPosition: 'right',
  shouldTruncate: true,
  initialValue: '',
  rows: 6,
  resize: 'vertical',
  onChange: () => undefined,
  onFocus: () => undefined,
  onBlur: () => undefined,
  required: false,
  disabled: false,
};

export default TextareaCounter;
