
import PropTypes from 'prop-types';
const Button = ({ color, text, onclick}) => { //(props) => {
    return (
        
            <button onClick={onclick} style={{backgroundColor : color}} className='btn' >{text}</button>
        
    )
}

Button.defaultProps = {
    color : 'steelblue'
}

Button.prototypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onclick: PropTypes.func
}

export default Button
