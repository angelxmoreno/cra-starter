import { action, observable } from 'mobx';

class Alert {
    id;
    body;
    props;

    constructor(type, title, body, props = {}) {
        this.id = Date.now();
        this.body = body;
        this.props = {
            ...props,
            title,
            type
        };
    }
}

export class AlertStore {
    @observable alerts = [];

    @action create(type, title, body, props = {}) {
        this.alerts.push(new Alert(type, title, body, props));
    }

    @action success(title, body, props = {}) {
        this.create('success', title, body, props);
    }

    @action danger(title, body, props = {}) {
        this.error(title, body, props);
    }

    @action error(title, body, props = {}) {
        this.create('danger', title, body, props);
    }

    @action remove(id) {
        this.alerts = this.alerts.filter(alert => alert.id !== id);
    }
}

export default new AlertStore();