import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import autobind from 'autobind-decorator';
import Button from './Button';

@pureRender
export default class Form extends Component {

    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        selectedCurrency: PropTypes.string,
        availableCurrencies: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        onAdd: PropTypes.func.isRequired
    };

    @autobind
    handleChange(e) {
        const {onChange} = this.props;
        onChange(e.target.value);
    }

    @autobind
    handleAdd() {
        const {onAdd, selectedCurrency} = this.props;
        onAdd(selectedCurrency);
    }

    render() {
        const {isFetching, selectedCurrency, availableCurrencies} = this.props;
        return (
            <div className="form">
                {isFetching && <span>Please wait...</span>}
                {!isFetching && (
                    <div className="form-content">
                        <select className="form-select"
                                value={selectedCurrency || ''}
                                onChange={this.handleChange}>
                            {[<option key="placeholder" value="">Select currency...</option>,
                                ...availableCurrencies.map(currencyCode => (
                                    <option key={currencyCode} value={currencyCode}>{currencyCode}</option>
                                ))]}
                        </select>
                        <Button onClick={this.handleAdd} disabled={!selectedCurrency}>
                            Add currency
                        </Button>
                    </div>
                )}
            </div>
        );
    }

}
