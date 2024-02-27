import React, { useCallback, useRef } from 'react'
import './SelectInput.css';
import '../commonStyles.css';
import { InputProps } from '../commonTypes'
import {ReactComponent as ChevronDown} from '../../../../assets/icons/chevronDown.svg';
import {ReactComponent as Clock} from '../../../../assets/icons/clock.svg';
import availableTimes from '../../../../data/avilable-times/available-times.ts';

interface Props extends InputProps<string> {

}

const SelectInput: React.FC<Props> = ({
  label,
  value,
  caption = '',
  error,
  onChange
}) => {
  const ref = useRef<HTMLSelectElement>(null);

  const handlePickerClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!ref?.current) return;
    ref.current.showPicker();
  }, []);

  const handleSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    console.log(e.target.value);
    onChange?.(e.target.value);
  }, [onChange]);

  return (
    <div className={`field-wrapper${error ? ' errored' : ''}`}>
      <label className='text-XL'>{ label }</label>
      <div className='input-wrapper'>
        <button onClick={handlePickerClick}>
          <Clock />
        </button>
        <select
          ref={ref}
          value={value}
          className={`${!value ? 'default' : ''}`}
          onChange={handleSelect}
          onBlur={handleSelect}
        >
          {availableTimes.map(at => <option key={at} value={at}>{at}</option>)}
          <option selected disabled hidden value={''}>mm:ss</option>
        </select>
        <button onClick={handlePickerClick}>
          <ChevronDown />
        </button>
      </div>
      <span>{ error || 'no error' }</span>
    </div>
  )
}

export default SelectInput