import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {


    render() {

        const button = (
            <button
                id={this.props.id}
                text={this.props.text}
                type="button"
            >
            {this.props.texto}
            </button>
        )

        return button
    }
    
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.any,
    texto: PropTypes.string.isRequired

}

export default Button;