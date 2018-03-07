class UserFile{

    constructor() {
        this.state = {
            username: ''
        }
        this.getUserName = this.getUserName.bind(this);
        this.setName = this.setName.bind(this);
    }

    static getUserName = () => {
        return this.state.username;
    }

    static setName = (props) => {
        this.state.username = props;
        return;
    }

}

export default UserFile;