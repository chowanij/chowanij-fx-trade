import React, { Component } from 'react';
import classNames from 'classnames'; 
import './PriceIndicator.css';

class PriceIndicator extends Component {

    render() {
        const { type, currency, value} = this.props;
        const caption = `${type} ${currency}`;
        const isBuy = type ==='buy';
        const priceIndicatorClassname = classNames({
            'price-indicator': true,
            'price-indicator-align-left': !isBuy,
            'price-indicator-align-right': isBuy,
        });
        const priceIndicatorTriangleClassName = classNames({
            'price-indicator-triangle-right': !isBuy,
            'price-indicator-triangle-left': isBuy,
        })
        const priceIndicatorCaptionClassName = classNames({
            'price-indicator-caption': true,
            'buy': isBuy,
            'sell': !isBuy,
        })
        const priceIndicatorValueClassName = classNames({
            'price-indicator-value': true,
            'buy': isBuy,
            'sell': !isBuy,
        })
        
        return (
            <div className="price-indicator-container">
                {isBuy && <div className={priceIndicatorTriangleClassName}></div>}
                <div className={priceIndicatorClassname}>
                    <div className={priceIndicatorCaptionClassName}>
                        {caption}
                    </div>
                    <div className={priceIndicatorValueClassName}>
                        {this.renderValue()}
                    </div>
                </div>
                {!isBuy && <div className={priceIndicatorTriangleClassName}></div>}
            </div>
        );
    }

    renderValue = () => {
        const { value } = this.props;
        return value.toString().split('').map((item, idx) => {
            const className = classNames({
                'bigger': idx === 4 || idx === 5,
                'super': idx > 5,
            });
            return (
                <span key={`${idx}_value_${item}`} className={className}>
                    {item}
                </span>
            );
        } )
    }
}

export default PriceIndicator;