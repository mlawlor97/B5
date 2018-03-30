import React from 'react';
import {Messages} from '../Messages';
import {User} from '../UserFile';
import io from 'socket.io-client';

class Chat extends React.Component {

    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 2000);
    }

    componentWillUnmount() {
        Messages.clear();
        this.socket.disconnect();
    }

    constructor(props) {
        super(props);
        this.socket = null;

        try {
            this.socket = io('http://' + User.getip + ':3000');
            this.socket.connect();
        } catch (e) {
            // alert("Chat is not currently working");
        }

        this.socket.emit('add user', {
            username: User.name,
            otheruser: Messages.other
        });

        this.socket.on('new message', function (res) {
            // alert(JSON.stringify(res));
            Messages.mesList.push({
                user: Messages.other,
                message: res.message.message,
                time: res.message.time
            });
        });
    }

    state = {
        message: "",
    };

    sendMessage(info) {
        //send message through socket
        this.socket.emit('new message', { //breaks on long messages
            message: info.message,
            time: info.time
        });

        Messages.mesList.push({
            user: User.name,
            message: info.message,
            time: info.time
        });

        this.forceUpdate();
    }

     addText(info) {
        return (
            <div>
                <div className="container">
                    <p className="textP" align="right">{info.user + ": " + info.message}</p>
                    <span className="time-right">{info.time}</span>
                </div>
            </div>
        );
    }

    addResponse(info) {
        return (
            <div>
                <div className="container darker">
                    <p className="textPdark" align="left">{info.user + ": " + info.message}</p>
                    <span className="time-left">{info.time}</span>
                </div>
            </div>
        );
    }

    getTime(time) {
        var d = new Date(time);
        var ampm = d.getHours() > 11 ? "pm" : "am";
        var mins = d.getMinutes();
        mins = d.getMinutes() < 10 ? "0" + mins : mins;
        return d.getHours() % 12 + ":" + mins + ampm;
    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({[fieldName]: event.target.value});
        }
    }

    renderMessages() {
        var i;
        var stuff = [];
        for (i = 0; i < Messages.mesList.length; i++) {
            var mes = Messages.mesList[i];
            if (mes.user === User.name) {
                stuff.push(<div>{this.addText(mes)}</div>);
            } else {
                stuff.push(<div>{this.addResponse(mes)}</div>);
            }
        }
        return stuff;
    }

    render() {
        return (
            <div>
                {this.renderMessages()}

                <div className="container">
                    <span>
                        <input type="text" name="message" placeholder="message" size={90}
                               onChange={this.onFieldChange('message').bind(this)}/>
                        <input type="submit" value="Submit"
                               onClick={() => this.sendMessage({message: this.state.message, time: this.getTime(Date.now())})}/>
                    </span>
                </div>

            </div>
        );
    }

}

export default Chat;