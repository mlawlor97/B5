var userName = {
    username: '',
    ip: 'proj-319-B5.cs.iastate.edu',
    // ip: '10.26.56.58',
    admin: false,


    get name() {
        return this.username;
    },
    set name(props) {
        this.username = props;
    },

    get getip() {
        return this.ip;
    },

    get adminStatus() {
        return this.admin;
    },
    set adminStatus(props) {
        this.admin = props;
    }
};

export const User = userName;
