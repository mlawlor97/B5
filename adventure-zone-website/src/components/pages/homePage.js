import React, {Component} from 'react';
import './../../App.css';

class homePage extends Component {
    render() {
        return (
            <div className="App-body">
                <main>
                    <div className="Game-list">
                        <p>games</p>
                    </div>

                    <div className="Friends-list">
                        <p>friends</p>
                    </div>
                </main>

            </div>
        );
    }
}

export default homePage;
