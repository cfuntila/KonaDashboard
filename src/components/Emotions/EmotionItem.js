import React from 'react';
import './EmotionItem.css';

const getDate = (epoch) => {
    return new Date(epoch*1000).toLocaleString("en-US");
}

function BoldText({children}) {
    return <span style={{fontWeight: 'bold'}}>{children}</span>;
}

const EmotionItem = ({ emotion }) => {
    const date = getDate(emotion.Timestamp);

    return (
        <div>
            <div className='ui segment'>
                <div role="listitem" className='item content'>
                    <div>
                        <i className={`${emotion.Selection} user icon`}></i>
                        {emotion.SlackUserId}
                    </div>     
                    <div className='metadata' style={{color:'grey'}}>
                        <BoldText>Org: </BoldText>
                        {emotion.SlackOrgId}
                        {' '}
                        <BoldText>Team: </BoldText>
                        {emotion.SlackTeamId}
                    </div>               
                    <div className="ui three column grid">
                        <div className='row'>
                            <div className='column'>
                                <h4 className='ui header'>
                                    {emotion.Emotion}
                                </h4>
                            </div>
                            <div className='column'>
                                <i className={`${emotion.Selection} heart icon`}></i>
                            </div>
                            <div className='column'>
                                {date}
                            </div>
                        </div>
                    </div>
                </div>
                <p>{emotion.Elaboration}</p>
            </div>
        </div>
    );
};

export default EmotionItem;