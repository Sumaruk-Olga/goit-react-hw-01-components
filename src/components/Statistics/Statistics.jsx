import PropTypes from 'prop-types';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';

export const Statistics = ({ title, stats }) => {
    return <section className="statistics">        
        {title && <h2 className="title">{ title }</h2>}
        <ul className="stat-list">
            {stats.map(item => {
                return (<StatisticsList key={item.id} label={item.label} percentage={item.percentage} />)
            })}
        </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    })).isRequired,
}