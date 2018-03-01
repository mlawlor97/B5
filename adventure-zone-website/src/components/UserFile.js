class UserFile{

    constructor() {
        this.state = {
            username: ''
        }
    }

    getUserName = () => {
        return this.state.username;
    }

    setName = (props) => {
        this.state.username = props.name;
        return;
    }

}

export default UserFile;