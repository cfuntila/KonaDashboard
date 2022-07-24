import React from 'react'

const RankedItem = ({teamId, redCircles, totalEmotionsReported}) => {
    return (
        <tr>
            <td>
                <h4 className="ui image header">
                    <div className="content">
                        {teamId}
                        <div className="sub header">Total Reported: {totalEmotionsReported}</div>
                    </div>
                </h4>
            </td>
            <td>
                {redCircles}
            </td>
        </tr>
    )
}

export default RankedItem;