import React from 'react';
import './QandA.scss';

function QandA() {
    return (
        <div className="QandA-start">
            <div className="QandA-title">Q & A</div>
            <hr className="QandA-hr"/>
            <div className="QandA-description">작성된 질문이 없습니다.</div>
            <hr className="QandA-hr"/>
            <div className="button"><br/>
                <button className="QandA-btn">질문하기</button>
            </div>
        </div>
    )
}

export default QandA
