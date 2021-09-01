import React from 'react';
import ProductRow from '../components/ProductRow';
import axios from 'axios';
import { connect } from 'react-redux';

class ListProducts extends React.Component {

    componentWillMount() {
        axios.get('http://localhost:3003/products')
            .then(response => {
                this.props.dispatch({
                    type: 'FETCH_PRODUCT',
                    products: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        console.log(this.props);
        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.productReducer.map(
                            (product, index) =>
                                <ProductRow product={product} key={index} />
                        )
                    }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
};

export default connect(mapStateToProps)(ListProducts);