import React from 'react';
import { getRatingTableData } from '../../../utils/transformers/transformers';
import { CustomTable, CustomPagination } from 'components';

const RatingCard = ({ data, handleRowClick, handlePageChange }) => {
  const headArray = {
    position: {
      title: 'Position',
      align: 'left',
    },
    photo: {
      title: 'Photo',
      align: 'left'
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
  };

  const tableData = data.data[data.page - 1]? getRatingTableData(data.data[data.page - 1]) : []

  const pageCount = Math.ceil(data.total/data.size)

  return (
    <div className="rating-card">
      <CustomTable headArray={headArray} data={tableData} handleRowClick={handleRowClick} />
      <CustomPagination page={data.page} handlePageChange={handlePageChange} count={pageCount} />
    </div>
  )
}

export default RatingCard
