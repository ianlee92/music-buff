import React from 'react'
import './HistoryPage.scss';

function HistoryPage(props) {
    return (
        <div className="historyHead" style={{marginTop:'220px'}}>
            <h2>마이페이지</h2>
            <table>
                <thead>
                    <tr>
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>
                    {props.user.userData && 
                        props.user.userData.history.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.dateOfPurchase}</td>
                            </tr>
                        ))}
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage
