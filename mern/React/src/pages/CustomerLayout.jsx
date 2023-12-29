
import PropTypes from 'prop-types';

function CustomerLayout(props) {
    return (
        <div>
            CustomerLayout
            {props.children}
        </div>
    )
}

CustomerLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default CustomerLayout