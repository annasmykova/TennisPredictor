import React from 'react';
import {
  getMatchesTableData,
} from '../../../utils/transformers/transformers';
import { CustomTable, CustomPagination, MatchModal } from 'components';
import { NavLink } from 'react-router-dom';

const MatchesCard = ({ data, isEditable, handlePageChange, user }) => {
  const headArray = {
    index: {
      title: '#',
      align: 'left',
    },
    winner: {
      title: 'Winner',
      align: 'left',
      renderComponent: row => {
        return <NavLink className="link-default" to={`/player/${row.winner.id}`}>{row.winner.name}</NavLink>
      }
    },
    loser: {
      title: 'Loser',
      align: 'left',
      renderComponent: row => {
        return <NavLink className="link-default" to={`/player/${row.loser.id}`}>{row.loser.name}</NavLink>
      }
    },
    score: {
      title: 'Score',
      align: 'right'
    },
    surface: {
      title: 'Surface',
      align: 'right'
    },
    tournamentType: {
      title: 'Tourney Level',
      align: 'right'
    },
    date: {
      title: 'Date',
      align: 'right'
    },
  };

  const tableData = data.data[data.page - 1]? getMatchesTableData(data.data[data.page - 1]) : []

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
        user && isEditable && <MatchModal />
      }
    </div>
  )
}

export default MatchesCard
