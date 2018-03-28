var messages = {

    messageList: [{user: 'Scooby',
                    message: 'Ruh-roh',
                    time: '5:42pm'}],

    get mesList() {
        return this.messageList;
    },
    set mesList(props) {
        this.messageList.pust(props);
    }
};

export const Messages = messages;