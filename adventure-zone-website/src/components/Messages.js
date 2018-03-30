var messages = {

    otherUser: "",
    messageList: [],

    get mesList() {
        return this.messageList;
    },
    set mesList(props) {
        this.messageList = props;
    },

    get other() {
        return this.otherUser;
    },
    set other(props) {
        this.otherUser = props;
    },

    clear() {
        this.messageList = [];
    }
};

export const Messages = messages;