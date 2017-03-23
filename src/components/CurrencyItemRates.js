import React, {PropTypes} from 'react';

const CurrencyItemRates = ({
    mid
}) => (
    <span className="currency-item-rates">{mid}</span>
);

CurrencyItemRates.propTypes = {
    mid: PropTypes.number
};

export default CurrencyItemRates;
