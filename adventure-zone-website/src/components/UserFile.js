var userName = {
    username: '',
    get name() {
        return this.username;
    },
    set name(props) {
        this.username = props;
    }
};

export const User = userName;