import React from 'react';
import RankedListTable from './RanketListTable.js';

const RankedList = () => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">Burnout Risk</div>
                <div className="meta">Ranked from most to least</div>
                <div className="ui ordered list">
                    <RankedListTable />
                </div>
            </div>
        </div>
    )
}

export default RankedList;