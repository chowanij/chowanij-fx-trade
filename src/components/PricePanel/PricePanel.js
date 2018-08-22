import React, { Component } from 'react';
import PriceIndicator from './PriceIndicator';

import './PricePanel.css';

class PricePanel extends Component {

    render() {
        return (
            <div className="price-panel">
                <div className="price-panel-title-container">
                    <h2 className="price-panel-title">{this.props.title}</h2>
                </div>
                <div className="price-panel-body">
                    <PriceIndicator 
                        type="sell"
                        currency="USD"
                        value={0.12345}
                    />
                    <PriceIndicator   
                        type="buy"
                        currency="EUR"
                        value={0.12345}
                    />
                </div>
            </div>
        );
    }
}

export default PricePanel;