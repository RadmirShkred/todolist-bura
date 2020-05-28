import React, {Component} from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {

    onLabelChange = () => {
        console.log('.');
    }

    render() {
        return (
            <form className="item-add-form d-flex">
                <input
                    type="text"
                    className="form-control input-form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                />
                <button
                    className="btn btn-outline-secondary button-add-item"
                    onClick={() => this.props.onItemAdded('hello')}
                >Add Item
                </button>
            </form>
        );
    }
}

export default ItemAddForm;
