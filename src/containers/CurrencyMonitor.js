import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CurrencyItemList from '../components/CurrencyItemList';
import Form from '../components/Form';

import * as actions from '../actions';

@connect(store => ({
    allCurrencies: store.allCurrencies,
    availableCurrencies: store.availableCurrencies,
    currenciesByCode: store.currenciesByCode,
    currencyRatesByCode: store.currencyRatesByCode,
    form: store.form
}), dispatch => ({
    boundActionCreators: bindActionCreators(actions, dispatch)
}))
export default class CurrencyMonitor extends Component {

    static propTypes = {
        allCurrencies: PropTypes.array.isRequired,
        availableCurrencies: PropTypes.array.isRequired,
        currenciesByCode: PropTypes.object.isRequired,
        currencyRatesByCode: PropTypes.object.isRequired,
        form: PropTypes.object.isRequired,
        boundActionCreators: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.boundActionCreators.fetchAvailableCurrencies();
    }

    render() {
        const {
            allCurrencies,
            availableCurrencies,
            form,
            boundActionCreators,
            ...otherProps
        } = this.props;
        const {
            selectCurrency,
            addCurrency,
            fetchAvailableCurrencies,
            ...otherBoundActionCreators
        } = boundActionCreators;
        return (
            <div className="currency-monitor">
                <CurrencyItemList
                    allCurrencies={allCurrencies}
                    {...otherProps}
                    {...otherBoundActionCreators}/>
                <Form
                    onChange={selectCurrency}
                    onAdd={addCurrency}
                    availableCurrencies={availableCurrencies.filter(currencyCode => !allCurrencies.includes(currencyCode))}
                    {...form}/>
            </div>
        );
    }

}
