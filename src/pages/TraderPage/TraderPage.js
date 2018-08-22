import React, { Component } from 'react';
import PricePanel from '../../components/PricePanel';
import './TraderPage.css'

class TraderPage extends Component {
    render() {
        return(
            <div className="trader-page-layout">
                <PricePanel title="Title title"/>
                <PricePanel title="Title title"/>
                <PricePanel title="Title title"/>
                <PricePanel title="Title title"/>
                <PricePanel title="Title title"/>
            </div>
        );
    }
}

export default TraderPage