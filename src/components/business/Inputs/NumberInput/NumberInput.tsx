import React from 'react'
import '../commonStyles.css'
import { InputProps } from '../commonTypes'

enum Operation {
  ADD,
  SUBTRACT
}

interface Props extends InputProps<number> {
  min?: number
  max?: number | null
}

const NumberInput: React.FC<Props> = ({
  label,
  value,
  caption = '',
  error,
  onChange,
  min = 1,
  max = null
}) => {

  const handleClick = React.useCallback((value: number) => {
    if (isNaN(value) || (value >= min && (max === null || value <= max))) {
      onChange?.(value);
    }
  }, [max, min, onChange]);

  const handleOpClick = React.useCallback((op: Operation, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch(op) {
      case Operation.ADD:
        handleClick((value || 0) + 1);
        break;
      case Operation.SUBTRACT:
        handleClick((value || 0) - 1);
        break;
    }
  }, [value, handleClick]);

  return (
    <div className={`field-wrapper${error ? ' errored' : ''}`}>
      <label>{ label }</label>
      <div className='input-wrapper'>
        <button
          className='subtract'
          onClick={e => handleOpClick(Operation.SUBTRACT, e)}
        >
          -
        </button>
        <input
          type='number'
          value={value?.toString()}
          placeholder={caption}
          onChange={(e) => handleClick(parseInt(e.target.value) || NaN)}
          onBlur={(e) => handleClick(parseInt(e.target.value) || NaN)}
        />
        <button className='add' onClick={e => handleOpClick(Operation.ADD, e)}>+</button>
      </div>
      <span>{ error || 'no error' }</span>
    </div>
  )
}

export default NumberInput