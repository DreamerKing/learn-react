/**
 * Created by DK on 2016/12/8.
 */

import React, {Component, PropTypes} from 'react';
import marked from 'marked';
import CheckList from './CheckList';

let titlePropType = (props, propName, componentName) => {
    if(props[propName]) {
        let value = props[propName];
        if(typeof value != 'string' || value.length > 80) {
            return new Error(
                `${propName} in ${componentName} is longer then 80 characters`
            );
        }
    }
}

class Card extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        };
    }


    // 列表的显示隐藏切换
    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }

    render() {
        let cardDetails;
        if(this.state.showDetails) {
            cardDetails =  (
                <div className="card-details">
                  <span dangerouslySetInnerHTML={{ __html: marked(this.props.description)}} />
                    <CheckList cardId={this.props.id}
                               tasks={this.props.tasks} />
                </div>
            );
        }

        return (
            <div className="card">
               <div className={this.state.showDetails? "card-title card-title-is-open" : "card-title"}
                     onClick={this.toggleDetails.bind(this)}>
                    {this.props.title}
                </div>
                {cardDetails}
            </div>
        );
    }
}

Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    description: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default Card;