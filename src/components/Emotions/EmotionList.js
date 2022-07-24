import React from 'react';
import EmotionItem from './EmotionItem';

const EmotionList = ({emotions, onEmotionSelect}) => {
    const renderedList = emotions.map( emotion => {
        return <EmotionItem key={emotion.Id} emotion={emotion} onEmotionSelect={onEmotionSelect}/>
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default EmotionList;