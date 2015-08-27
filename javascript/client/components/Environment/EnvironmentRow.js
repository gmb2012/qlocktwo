import React from 'react';
import { Row } from 'react-bootstrap';
import EnvironmentItem from './EnvironmentItem';

class EnvironmentRow extends React.Component {
    render() {
        return (<Row>{this.props.items.map((item, index) => <EnvironmentItem {...item} key={index} />)}</Row>);
    }
}

EnvironmentRow.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default EnvironmentRow;
