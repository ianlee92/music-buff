import React from 'react'
import './HistoryPage.scss';

function HistoryPage(props) {
    return (
        <div className="historyHead" style={{marginTop:'220px'}}>
            <h2>마이페이지</h2>
            <table>
                <thead>
                    <tr>
                        <th>상품명</th>
                        <th>금액</th>
                        <th>수량</th>
                        <th>구매일자</th>
                    </tr>
                </thead>
                <tbody>
                    {props.user.userData && 
                        props.user.userData.history.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.dateOfPurchase}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div style={{marginBottom:'50px'}} />
        </div>
    )
}

export default HistoryPage
