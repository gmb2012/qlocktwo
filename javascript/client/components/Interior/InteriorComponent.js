import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InteriorEnvironmentComponent from './InteriorEnvironmentComponent';
import InteriorChartComponent from './InteriorChartComponent';
import EnvironmentCategory from '../Environment/EnvironmentCategory';

class InteriorComponent extends React.Component {
    render() {
        return (
            <Row className='environment'>
                <EnvironmentCategory iconClasses={this.props.iconClasses} />
                <Col md={10} xs={10}>
                    <InteriorEnvironmentComponent {...this.props.interiorEnvironmentComponent} />
                    <InteriorChartComponent {...this.props.interiorChartComponent} />
                </Col>
            </Row>
        );
    }
}

InteriorComponent.propTypes = {
    iconClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    interiorEnvironmentComponent: React.PropTypes.object.isRequired,
    interiorChartComponent: React.PropTypes.object.isRequired
};

export default InteriorComponent;
