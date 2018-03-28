import React from 'react';
import {Messages} from '../Messages';
import {User} from '../UserFile';
import io from 'socket.io-client';

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.socket = null;


        // try {
        //     alert(this.socket = io());
        // } catch (e) {
        //     alert("Chat is not currently working");
        // }
    }

    state = {
        message: "",
    };

    sendMessage(info) {
        //send message through socket
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
                <div class="container">
                    <p align="left">{info.user + ": " + info.message}</p>
                    <span class="time-right">{info.time}</span>
                </div>
            </div>
        );
    }

    addResponse(info) {
        return (
            <div>
                <div class="container darker">
                    <p align="left">{info.user + ": " + info.message}</p>
                    <span class="time-left">{info.time}</span>
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
        var i = 0;
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

                <div class="container">
                    <span>
                        <input type="text" name="message" placeholder="message"
                               onChange={this.onFieldChange('message').bind(this)}/>
                        <input type="submit" value="Submit"
                               onClick={() => this.sendMessage
                               ({message: this.state.message, time: this.getTime(Date.now())})}/>
                    </span>
                </div>

            </div>
        );
    }

}

export default Chat;