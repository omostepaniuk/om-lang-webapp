import './ToggleButton.scss';
import { useState } from 'react';

const ToggleButton = (props) => {
  const {
    left: { label: leftLabel, value: leftValue },
    right: { label: rightLabel, value: rightValue },
    value,
    onChange
  } = props;
  const [active, setActive] = useState(value);

  function toggleButton(val) {
    onChange(val);
    setActive(val);
  }

  return <div className={'toggle-button'}>
    <button className={`button-left ${active === leftValue ? 'active' : ''}`}
            onClick={() => toggleButton(leftValue)}>{leftLabel}</button>
    <button className={`button-right ${active === rightValue ? 'active' : ''}`}
            onClick={() => toggleButton(rightValue)}>{rightLabel}</button>
  </div>
}

export default ToggleButton;