import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prepareBeverage } from './Actions';


class BeverageButton extends Component {

    handleOnClick = (e) => {
        this.props.prepareBeverage(this.props.beverageType);
    }
    render() {
        let { preparedBeverages, beverageType } = this.props;
        preparedBeverages = preparedBeverages.filter(beverage => beverage.type === beverageType);
        const preparedBeverageList = preparedBeverages.length ? (
            preparedBeverages.map(beverage => {
                if (!beverage.expired) {
                    const beveragestyle = !beverage.latest ? 'line-through' : 'none';
                    return (
                        <div className="collection-item" key={beverage.id}>
                            <span className="fade-list-item" style={{ textDecoration: beveragestyle }}>{beverage.timestamp}</span>
                        </div>
                    );
                }
            })
        ) : (
                <p className="center red-text">No timestamp found.</p>
            );
        return (
            <div className="container beverageBtn">
                <div className="container" style={{overflow: 'auto', height: '180px'}}>
                    <div className="collection timestamp">
                        {preparedBeverageList}
                    </div>
                </div>
                <div className="container">
                    <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.handleOnClick}><img src={this.props.beverageImg} alt="beverage" /></button>
                    <p className="red-text">{this.props.beverageType + '!'}</p>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        preparedBeverages: state.preparedBeverages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        prepareBeverage: (beverageType) => {dispatch(prepareBeverage(beverageType))},
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BeverageButton);