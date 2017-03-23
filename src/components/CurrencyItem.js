import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import autobind from 'autobind-decorator';
import {valuesIn} from 'lodash';
import CurrencyItemCode from './CurrencyItemCode';
import CurrencyItemRates from './CurrencyItemRates';
import CurrencyItemRemoveButton from './CurrencyItemRemoveButton';
import CurrencyItemFetchingIndicator from './CurrencyItemFetchingIndicator';
import * as tableTypes from '../constants/tableTypes';

const FETCH_INTERVAL = 3000;

@pureRender
export default class CurrencyItem extends Component {

    static propTypes = {
        code: PropTypes.string.isRequired,
        table: PropTypes.oneOf(valuesIn(tableTypes)),
        onRemove: PropTypes.func.isRequired,
        mid: PropTypes.number,
        isFetching: PropTypes.bool,
        fetched: PropTypes.bool,
        fetch: PropTypes.func.isRequired
    };

    static defaultProps = {
        isFetching: false
    };

    componentDidMount() {
        this.intervalId = setInterval(this.handleFetch, FETCH_INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    @autobind
    handleFetch() {
        const {isFetching, fetch, code, table} = this.props;
        if (!isFetching) {
            fetch({code, table});
        }
    }

    @autobind
    handleRemove() {
        const {code, onRemove} = this.props;
        onRemove(code);
    }

    render() {
        const {code, mid, isFetching, fetched} = this.props;
        return (
            <div className="currency-item">
                {(isFetching || !fetched) && <CurrencyItemFetchingIndicator firstUse={!fetched}/>}
                <CurrencyItemCode code={code}/>
                <CurrencyItemRates mid={mid}/>
                <CurrencyItemRemoveButton onClick={this.handleRemove}/>
            </div>
        );
    }

}
