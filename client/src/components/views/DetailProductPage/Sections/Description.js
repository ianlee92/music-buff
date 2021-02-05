import React from 'react'
import '../DetailProductPage.scss';
function Description() {
    return (
        <div className="deliveryDescription">
            <hr className="descriptionHr"></hr><br /><br /><br />
            ☀︎ 배송기간<br />
            <span className="subDescription"><br />
            ・  주문 제작 제품으로 영업일 기준 배송완료까지 7일 정도 소요됩니다.<br /><br />
            </span><br />
            ☀︎ 구매 시 주의사항<br /><br />
            <span className="subDescription">
            ・ 제품 사용에 문제가 있을 경우 교환/환불해드립니다.<br />
            ・ 주문 제작 제품으로 단순 변심에 의한 교환/환불은 불가합니다.<br />
            ・ 모니터의 사양에 따라 컬러가 상이할 수 있습니다.<br />
            </span>
            <br /><br />
            ☀︎ 반품/교환 안내<br /><br />
            <span className="subDescription">
            ・ 반품배송비 : 편도 3000원<br />
            ・ 교환배송비 : 6000원<br />
            </span>
            <br /><br />
            ☀︎ 반품/교환 사유에 따른 요청 가능 기간<br /><br />
            <span className="subDescription">
            ・ 상품하자의 경우 상품 수령 후 5일 이내 (판매자 반품배송비 부담)</span><br />
            <br /><br />
            ☀︎ 반품/교환 불가능 사유<br /><br />
            <span className="subDescription">
            ・ 반품요청기간이 지난 경우<br />
            ・ 구매자의 책임 있는 사유로 상품 등이 훼손된 경우 (상품의 내용을 확인하기 위하여 포장을 훼손한 경우는 제외)<br />
            ・ 구매자의 사용에 의하여 상품의 가치가 감소한 경우<br />
            ・ 시간의 경과에 의하여 재판매가 곤란할 정도로 상품의 가치가 감소한 경우<br />
            ・ 고객주문 확인 후 상품제작에 들어가는 주문제작상품</span><br />
        </div>
    )
}

export default Description
