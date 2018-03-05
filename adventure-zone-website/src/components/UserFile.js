class UserFile {

    static getName = () => {
        return this.username;
    };

    static setName = (props) => {
        this.username = props;
    }

}

export default UserFile;