import PropTypes, { arrayOf, shape } from 'prop-types';
import { Transaction } from "components/Transaction/Transaction"

export const TransactionHistory = ({ items }) => {
    return <table className="transaction-history">
    <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>

    <tbody>
        {items.map(({id, type, amount, currency}) => <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency} />)
        }  
    </tbody>
</table>
}

TransactionHistory.propTypes = {
    items: arrayOf(shape({
    id:PropTypes.string.isRequired,
})).isRequired,
}