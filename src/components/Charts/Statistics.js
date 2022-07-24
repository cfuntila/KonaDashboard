import React from 'react';
import Data from '../../Data.json';
import alasql from 'alasql';

const stats = alasql(
    'SELECT COUNT(DISTINCT SlackUserId) as employees, COUNT(DISTINCT SlackTeamId) as teams, COUNT(DISTINCT SlackOrgId) as orgs FROM ?', [Data]);
const orgsNumber = stats[0]["orgs"];
const teamsNumber = stats[0]["teams"];
const employeesNumber = stats[0]["employees"];

const Statistics = () => {
    return (
        <div className="ui statistics">
            <div className="statistic">
                <div className="value">
                    {Data.length}
                </div>
                <div className="label">
                    Emotions Tracked
                </div>
            </div>
            <div className="statistic">
                <div className="value">
                    <i className="small building icon"/>
                    {orgsNumber}
                </div>
                <div className="label">
                    Orgs
                </div>
            </div>
            <div className="statistic">
                <div className="value">
                    <i className="small users icon"/>
                    {teamsNumber}
                </div>
                <div className="label">
                    Teams
                </div>
            </div>
            <div className="statistic">
                <div className="value">
                    <i className="small user icon"/>
                    {employeesNumber}
                </div>
                <div className="label">
                    Employees
                </div>
            </div>
        </div>
    )
}

export default Statistics;

