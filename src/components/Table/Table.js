import React from 'react';
import PropTypes from 'prop-types';
import RcTable from 'rc-table';

class Table extends React.Component {

	render() {

		const {
			columns,
			data
		} = this.props;

		return (
			<RcTable
				columns={columns}
				data={data}
				{...this.props}
			/>
		)
	}
}

Table.propTypes = {
	columns: PropTypes.array,
	data: PropTypes.array,
};

export default Table;