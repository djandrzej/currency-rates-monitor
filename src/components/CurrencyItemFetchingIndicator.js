import React, {PropTypes} from 'react';

const CurrencyItemFetchingIndicator = ({
    firstUse
}) => (
    <span className="currency-item-fetching-indicator">
        {firstUse ? 'p' : 'f'}
    </span>
);

CurrencyItemFetchingIndicator.propTypes = {
    firstUse: PropTypes.bool
};

CurrencyItemFetchingIndicator.defaultProps = {
    firstUse: false
};

export default CurrencyItemFetchingIndicator;
