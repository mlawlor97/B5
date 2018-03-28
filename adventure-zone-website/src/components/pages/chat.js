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
        Messages.mesList({
            user: User.name,
            message: info.message,
            time: info.time
        });
        this.addText({
            user: User.name,
            message: info.message,
            time: info.time
        });
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

    renderMessages(index) {
        if (Messages.mesList[index].user === User.name) {
            return (<div>{this.addText(Messages.mesList[index])}</div>);
        } else {
            return (<div>{this.addResponse(Messages.mesList[index])}</div>);
        }
    }

    render() {
        return (
            <div>
                {/*{this.addText({message: "TEST", time: this.getTime(Date.now())})}*/}
                {/*{this.addResponse({message: "RESPONSE", time: this.getTime(Date.now())})}*/}
                {this.renderMessages(0)}

                <div class="container">
                    <span>
                        <input type="text" name="message" placeholder="message"/>
                        <input type="submit" value="Submit"
                               onChange={this.onFieldChange('message').bind(this)}
                               onClick={() => this.sendMessage(this.state.message, this.getTime(Date.now()))}/>
                    </span>
                </div>

            </div>
        );
    }

}

export default Chat;