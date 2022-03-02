import Skeleton from "./Skeleton";
import { Link } from 'react-router-dom';

const WithSkeleton = props => {
    return (
        <div id="products-list">
            {props.isLoading 
                ? new Array(8).fill(1).map((_, i) => {
                    return <Skeleton key={i} />;
                })
                :props.data.map(product => {
                    return(
                        <div className="products-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <div>
                                    <img className="product-img" src={product.imageUrl} alt="베스트셀러1" />
                                </div>
                                <div className="products-contents">
                                    <p>{product.name}</p>
                                    <p>{product.price.toLocaleString()}원</p>
                                </div>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default WithSkeleton;