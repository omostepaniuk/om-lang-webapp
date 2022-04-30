import './Button.scss';
import { Link } from 'react-router-dom';

const buttonStyleCssClass = {
  primary: 'btn-primary',
  primaryOutline: 'btn-primary-outline',
  secondary: 'btn-secondary',
  secondaryOutline: 'btn-secondary-outline'
}

// type - button, link
// style - primary, primaryOutline, secondary, secondaryOutline
const Button = (props) => {
  const { type = 'button', buttonStyle = 'primary', title, onClick, toLink } = props;

  return <>
    {type === 'button' &&
      <button onClick={() => onClick()} className={`btn ${buttonStyleCssClass[buttonStyle]}`}>
        {title}
      </button>}
    {type === 'link' &&
      <Link to={toLink} className={`btn ${buttonStyleCssClass[buttonStyle]}`}>
        {title}
      </Link>}
  </>
}

export default Button;
