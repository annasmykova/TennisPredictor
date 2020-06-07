import React from 'react';
import {
  getInjuriesTableData,
} from '../../../utils/transformers/transformers';
import { CustomTable, CustomPagination, InjuryModal } from 'components';

const InjuriesCard = ({ data, isEditable, handlePageChange, user }) => {
  const headArray = {
    index: {
      title: '#',
      align: 'left',
    },
    injury: {
      title: 'Injury',
      align: 'left',
    },
    date: {
      title: 'Accident Date',
      align: 'right',
    },
    finishDate: {
      title: 'Estimated Recovery Date',
      align: 'right'
    },
  };

  const tableData = data.data[data.page - 1]? getInjuriesTableData(data.data[data.page - 1]) : []

  const pageCount = Math.ceil(data.total/data.size)

  return (
    <div className="rating-card__wrapper">
      <div className="rating-card">
        <CustomTable
          headArray={headArray}
          data={tableData}
        />
        <CustomPagination page={data.page} handlePageChange={handlePageChange} count={pageCount} />
      </div>
      {
        user && isEditable && <InjuryModal />
      }
    </div>
  )
}

export default InjuriesCard
