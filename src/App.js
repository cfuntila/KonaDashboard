import React from 'react';
import Statistics from './components/Charts/Statistics.js';
import LineChart from './components/Charts/LineChart.js';
import PieChart from './components/Charts/PieChart.js';
import RankedList from './components/RankedList/RankedList.js';


class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <h2 className="ui header">
                    Admin Kona
                    <div className="sub header">Your Dashboard</div>
                </h2>
                <div>
                    <div className="ui grid">
                        <div className="sixteen wide column"><Statistics /></div>
                        <div className="row">
                            <div className="left floated eight wide column">
                                <div className="ui large header">
                                    Mood Distribution
                                </div>
                                <div className="row"><PieChart /></div>
                            </div>
                            <div className="right floated six wide column"><RankedList/></div>
                        </div>
                        <div className="row">
                            <div className="ui large header">
                                Your company's welbeing over the last few months
                            </div>
                            <LineChart />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;