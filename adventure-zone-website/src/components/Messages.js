var messages = {

    messageList: [{user: 'Scooby',
                    message: 'Ruh-roh',
                    time: '5:42pm'},
        {user: 'ckoco1',
        message: 'Nope',
        time: '6:15pm'}],

    get mesList() {
        return this.messageList;
    },
    set mesList(props) {
        this.messageList = props;
    }
};

export const Messages = messages;