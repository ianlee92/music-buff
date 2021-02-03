import React, {useState} from 'react';
import './QandA.scss';
import QandAModal from './QandAModal';

function QandA() {
    const [ModalOpen, setModalOpen] = useState(false)
    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <div className="QandA-start">
            <div className="QandA-title">Q & A</div>
            <hr className="QandA-hr"/>
            <div className="QandA-description">작성된 질문이 없습니다.</div>
            <hr className="QandA-hr"/>
            <div className="button"><br/>
                <button className="QandA-btn" onClick={openModal}>질문하기</button>
                <QandAModal open={ModalOpen} close={closeModal} />
            </div>
        </div>
    )
}

export default QandA
