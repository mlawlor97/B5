import React, {Component} from 'react';
import Friends from './friends';
import Games from './games';


class homePage extends Component {

    render() {
        return (
            <div className="App-body">
                <main>

                    <Games/>

                    <Friends/>

                </main>

            </div>
        );
    }
}

export default homePage;