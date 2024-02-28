import React, { useCallback, useRef } from 'react'
import { InputProps } from '../commonTypes'
import {ReactComponent as ChevronDown} from '../../../../assets/icons/chevronDown.svg';
import {ReactComponent as Calendar} from '../../../../assets/icons/calendar.svg';
import useMediaQuery from '../../../../hooks/useMediaQuery/useMediaQuery.ts';

const DateInput: React.FC<InputProps<string>> = ({
  label,
  value,
  caption = '',
  error,
  onChange
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const { isMobile } = useMediaQuery();

  const handlePickerClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!ref?.current) return;
    ref.current.showPicker();
  }, []);

  const handleDateClick = useCallback((e: React.FocusEvent<HTMLInputElement, Element> | React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange?.(e.target.value)
  }, [onChange]);

  return (
    <div className={`field-wrapper${error ? ' errored' : ''}`}>
      {!label ? null : <label>{ label }</label>}
      <div className='input-wrapper'>
        <button onClick={handlePickerClick}>
          <Calendar />
        </button>
        <input
          type='date'
          className={`${value ? 'has-value' : ''}`}
          value={value}
          onChange={handleDateClick}
          onBlur={handleDateClick}
          ref={ref}
        />
        { !isMobile && (
          <button onClick={handlePickerClick}>
            <ChevronDown />
          </button>
        )}
      </div>
      <span>{ error || 'no error' }</span>
    </div>
  )
}

export default DateInput