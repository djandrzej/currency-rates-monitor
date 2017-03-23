import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import autobind from 'autobind-decorator';
import CurrencyItem from './CurrencyItem';

export default class CurrencyItemList extends Component {

    static propTypes = {
        allCurrencies: PropTypes.array.isRequired,
        currenciesByCode: PropTypes.object.isRequired,
        currencyRatesByCode: PropTypes.object.isRequired,
        fetchCurrencyRates: PropTypes.func.isRequired,
        removeCurrency: PropTypes.func.isRequired
    };

    render() {
        const {allCurrencies, currencyRatesByCode, removeCurrency, currenciesByCode, fetchCurrencyRates} = this.props;
        return (
            <div className="currency-item-list">
                {allCurrencies.map(currencyCode => (
                    <CurrencyItem
                        key={currencyCode}
                        onRemove={removeCurrency}
                        fetch={fetchCurrencyRates}
                        {...currenciesByCode[currencyCode]}
                        {...currencyRatesByCode[currencyCode]}/>
                ))}
            </div>
        );
    }

}
