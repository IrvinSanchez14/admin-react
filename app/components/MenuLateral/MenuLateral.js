import React from 'react';
import PropTypes from 'prop-types';
import Perfil from '../Perfil/Perfil';

const styles = {
    MenuLateral: {
        height: '100%',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        backgroundColor: '#f3f3f3',
        width: '220px',
        position: 'absolute',
    },
}

export class MenuLateral extends React.Component {

    render() {
        const menuLateral = (
            <div>
                <nav id={this.props.id} style={styles.MenuLateral} >
                    <Perfil />
                </nav>
            </div>

        )
        return menuLateral;
    }
}

MenuLateral.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default MenuLateral;