import React from 'react';
import { FormControl, InputLabel, Select as MUISelect, MenuItem } from '@mui/material';

import { type ISelectProps } from '../types';

const Select = ({ value, label, options, onChange }: ISelectProps) => {

  const handleChange = (value: string | number) => {
    onChange && onChange(value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        value={value}
        label={label}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map(({ value, label }, index) =>
          <MenuItem key={index} value={value}>{label}</MenuItem>
        )}
      </MUISelect>
    </FormControl>
  )
}

export default Select;