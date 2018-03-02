class UserFile {

    constructor() {
        var username = '';
    }

    static getName = () => {
        // alert(this.username);
        return this.username;
    };

    static setName = (props) => {
        this.username = props;
    }

}

export default UserFile;