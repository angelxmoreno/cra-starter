import { action, observable, computed } from 'mobx';

export class AuthStore {
    @observable user = {
        name: null,
        email: null
    };
    @observable JWT = null;

    @action login(userData) {
        this.user = userData;
    }
    @action logout() {
        this.user = {};
        this.JWT = null
    }

    @computed get userName() {
        return this.user.name;
    }

    @computed get isLoggedIn() {
        return this.user.name && this.user.name !== null && this.user.name !== undefined;
    }
}

export default new AuthStore();