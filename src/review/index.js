import axios from "axios";
import { API_URL } from '../config/constants';
import './review.scss';

function ReviewPage() {
    const onSubmit = (values) => {
        axios.post(`${API_URL}/products`, {
            name: values.name,
            product_review: values.product_review
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        })
    }
    return(
        <div id="review" className="innerCon">
            <h2>Review</h2>
            <form onFinish={onSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input placeholder="상품 이름을 입력해주세요" className="upload-name" />
                </div>
                <div>
                    <label htmlFor="product_review">상품후기</label>
                    <input placeholder="상품후기를 적어주세요" className="upload-name" />
                </div>
                <div>
                    <button size="large" htmlType="submit">등록</button>
                    <button size="large" htmlType="reset">취소</button>
                </div>
            </form>
        </div>
    );
}
export default ReviewPage;