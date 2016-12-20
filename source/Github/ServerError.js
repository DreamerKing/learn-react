/**
 * Created by DK on 2016/12/20.
 */

import React, { Component } from 'react';

const styles = {
    root: {
        textAlign: 'center'
    },
    alert: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#e9ab2d'
    }
};

class ServerError extends Component {
    render() {
        return (
            <div style={styles.root}>
                <div style={styles.alert}>&#9888;</div>
                <h1>Ops, we have a problem</h1>
                <p>Sorry!</p>
            </div>
        );
    }
}

export default ServerError;
