import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    baseA: {
        backgroundColor: 'red',
        padding: '33px 25px',
        paddingLeft: '0',
        listStyle: 'none',
    },
    ul: {
        paddingLeft: '0',
    },
}

export class Perfil extends React.Component { 

    render() {
        const perfil = (
            <div>
                <div>
                    <ul style={styles.ul} >
                        <li style={styles.baseA} >
                            <div>
                                <img />
                                    <a>
                                        <span>
                                            <span>
                                            </span>
                                            <span><b></b></span>
                                        </span>
                                    </a>
                                    <ul>
                                        <li><a></a></li>
                                        <li><a></a></li>
                                        <li><a></a></li>
                                        <li></li>
                                        <li><a></a></li>
                                    </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        )
        return perfil;
    }
}

Perfil.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default Perfil;