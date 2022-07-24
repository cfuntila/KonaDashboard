import React from 'react';
import alasql from 'alasql';
import Data from '../../Data.json';
import RankedItem from './RankedItem.js';

const redEntries = alasql('SELECT COUNT(Selection) as RedCircles, Selection, SlackTeamId FROM ? WHERE Selection == "red" GROUP BY SlackTeamId ORDER BY COUNT(Selection) DESC', [Data]);

const totalReported = (teamId) => {
    const hearts = alasql('SELECT COUNT(Selection) as Hearts FROM ? WHERE SlackTeamId == ?', [Data, teamId]);
    return hearts[0]["Hearts"];
}

const renderedList = redEntries.map( entry => {
    const redCircles = entry["RedCircles"];
    const teamId = entry["SlackTeamId"];
    const totalEmotionsReported = totalReported(teamId);
    return <RankedItem key={teamId} teamId={teamId} redCircles={redCircles} totalEmotionsReported={totalEmotionsReported} />
});

const RankedListTable = () => {
    return (
        <table className="ui very basic collapsing celled table">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Red Circles</th>
                </tr>
            </thead>
            <tbody>
                {renderedList}
            </tbody>
        </table>
    )}

export default RankedListTable;