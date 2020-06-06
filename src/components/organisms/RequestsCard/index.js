import React from 'react';
import {
  getRatingTableData,
  getRequestTableData,
  renderRequestWrapper
} from '../../../utils/transformers/transformers';
import { CustomTable, CustomPagination } from 'components';

const RequestsCard = ({ data, handleRowClick, handlePageChange }) => {
  const headArray = {
    index: {
      title: '#',
      align: 'left',
    },
    name: {
      title: 'Name',
      align: 'left'
    },
    gender: {
      title: 'Gender',
      align: 'right'
    },
    age: {
      title: 'Age',
      align: 'right'
    },
    country: {
      title: 'Country',
      align: 'right'
    },
    hand: {
      title: 'Hand',
      align: 'right'
    },
    button: {
      title: '',
      align: 'right'
    }
  };

  const tableData = data.data[data.page - 1]? getRequestTableData(data.data[data.page - 1]) : []

  const pageCount = Math.ceil(data.total/data.size)

  return (
    <div className="rating-card">
      <CustomTable
        headArray={headArray}
        data={tableData}
        handleRowClick={handleRowClick}
        buttonRender={renderRequestWrapper}
      />
      <CustomPagination page={data.page} handlePageChange={handlePageChange} count={pageCount} />
    </div>
  )
}

export default RequestsCard
