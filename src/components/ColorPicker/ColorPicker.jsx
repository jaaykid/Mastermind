import React from 'react';
import styles from './ColorPicker.css';

const ColorPicker = (props) => (
  <div>
    {props.colors.map((color, idx) => (
      <button
        key={color}
        className='color-button'
        style={{
          backgroundColor: props.colorIdx === idx ? 'white' : color,
          borderColor: color,
        }}
      />
    ))}
  </div>
);

export default ColorPicker;
