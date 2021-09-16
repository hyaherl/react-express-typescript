class User {
    constructor(id, password) {
        this.id = id;
        this.password = password;
    }

    getId() {
        return this.id;
    }

    getPassword() {
        return this.password;
    }
}

module.exports = User;