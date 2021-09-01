import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class ProductRow extends React.Component {

    constructor() {
        super();
        this.deleteProductById = this.deleteProductById.bind(this);
    }

    deleteProductById() {
        axios.delete(
            'http://localhost:3003/products/' + this.props.product.id)
            .then(response => {
                if (response.status === 200) {
                    this.props.dispatch({
                        type: 'DELETE_PRODUCT',
                        id: this.props.product.id
                    });
                }
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <tr>
                <td>{this.props.product.id}</td>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.location}</td>
                <td>
                    <button type="button" className="btn btn-danger"
                        onClick={this.deleteProductById}>
                        DELETE
                    </button>
                </td>
            </tr>
        )
    }
}

export default connect()(ProductRow);