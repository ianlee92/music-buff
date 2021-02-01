import React from 'react';
import './QandA.scss';

function QandA() {
    return (
        <div class="QandA-start">
            <div class="QandA-title">Q & A</div>
            <hr class="QandA-hr"/>
            <div class="QandA-description">작성된 질문이 없습니다.</div>
            <hr class="QandA-hr"/>
            <div class="button"><br/>
                <button class="QandA-btn">질문하기</button>
            </div>
        </div>
    )
}

export default QandA
