import React from 'react'
import './NumberInput.css'
import { InputProps } from '../commonTypes'

enum Operation {
  ADD,
  SUBTRACT
}

const NumberInput: React.FC<InputProps<number>> = ({
  label,
  value,
  caption = '',
  error,
  onChange
}) => {

  const handleOpClick = React.useCallback((op: Operation, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch(op) {
      case Operation.ADD:
        onChange?.((value || 0) + 1);
        break;
      case Operation.SUBTRACT:
        if (value && value > 0) {
          onChange?.(value - 1);
        }
        break;
    }
  }, [onChange, value])

  return (
    <div className='field-wrapper'>
      {!label ? null : <label className='text-XL'>{ label }</label>}
      <div className='number-input-wrapper'>
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
          onChange={(e) => onChange?.(parseInt(e.target.value))}
        />
        <button className='add' onClick={e => handleOpClick(Operation.ADD, e)}>+</button>
      </div>
    </div>
  )
}

export default NumberInput