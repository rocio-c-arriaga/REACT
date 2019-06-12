import React, { Component } from 'react';

// Actions
import { getData } from '../../utils/api';

// Components
import Item from './Item/Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            lastClicked: null, //dejar un default razonable
        }
        this.changeLastClicked = this.changeLastClicked.bind(this);
    }

    componentDidMount() {
        getData('items').then((items) => this.setState({items}));

    }
    changeLastClicked(id) {
        this.setState({lastClicked: id});
    } 
    
    renderItems() {
        return this.state.items.map((item, i) => (
            <Item
            key={`item-${i}`}
            lastClicked={this.state.lastClicked}
            changeLastClicked={this.changeLastClicked}
            {...item}
            />
            ));
        }
        
        render() {
            return(
            <table className="list" class="table table-hover">
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Value</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderItems()}
            </tbody>
            </table>
    );
}
}  

export default List;
/*
function renderItems(items) {
    return items.map((item,i) => (<Item key={`item-${i}`} {...item} />));
}

const List = ({items}) => {
    return (
        <table className = "list">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Clicked</th>
                </tr>
            </thead>
            <tbody>
                {renderItems(items)}
            </tbody>
        </table>   
    );
}
*/