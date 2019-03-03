import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { observer, inject } from 'mobx-react';

const AlertRow = ({ id, innerProps, removeAlert, children }) => {
    const onCancel = () => {
        removeAlert(id)
    };

    innerProps.onCancel = onCancel;
    innerProps.onConfirm = innerProps.onConfirm || onCancel;

    return (
        <SweetAlert {...innerProps}>
            {children}
        </SweetAlert>
    );
}

@inject('alertStore') @observer
class AlertContainer extends Component {
    render() {
        return (
            <span>
                {this.props.alertStore.alerts.map(alert_data => (
                    <AlertRow
                        key={alert_data.id}
                        id={alert_data.id}
                        innerProps={alert_data.props}
                        removeAlert={this.props.alertStore.remove.bind(this.props.alertStore)}>
                        {alert_data.body}
                    </AlertRow>
                ))}
            </span>
        );
    }
}


export default AlertContainer;
