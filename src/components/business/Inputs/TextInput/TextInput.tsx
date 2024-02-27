import React, { useCallback } from 'react'
import { InputProps } from '../commonTypes';

const PHONE_ACCEPTED_CHARS = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

enum TextInputType {
  EMAIL = 'email',
  PHONE = 'tel',
  DEFAULT = 'text'
}

interface Props extends InputProps<string> {
  type?: TextInputType
}

const TextInput: React.FC<Props> = ({
  label,
  value,
  caption = '',
  error,
  onChange,
  type = TextInputType.DEFAULT
}) => {

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (type === TextInputType.PHONE && !val.match(PHONE_ACCEPTED_CHARS)) return;
    onChange?.(e.target.value);
  }, [onChange, type])

  return (
    <div className={`field-wrapper${error ? ' errored' : ''}`}>
    {!label ? null : <label className='text-XL'>{ label }</label>}
    <div className='input-wrapper'>
      <input
        type={type}
        placeholder={caption}
        value={value}
        onChange={handleChange}
        onBlur={handleChange}
      />
    </div>
    <span>{ error || 'no error' }</span>
  </div>
  )
}

export default TextInput