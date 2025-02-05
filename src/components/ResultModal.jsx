import React from 'react';
import '../ResultModal.css'; // CSS 파일 import

const ResultModal = ({title, contents, callbackFn}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{title}</h2>
                </div>
                <div className="modal-contents">
                    <h2>{contents}</h2>
                </div>
                <div className="modal-footer">
                    <button className="close-button" onClick={ ()=>{if(callbackFn) callbackFn()}}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultModal;
