import PropTypes from 'prop-types';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';

export const Statistics = ({ title, stats }) => {
    return <section className="statistics">        
        {title && <h2 className="title">{ title }</h2>}
        <ul className="stat-list">
            <StatisticsList stats={stats}/>
        </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}