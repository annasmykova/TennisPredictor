import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromRatings } from 'store/selectors'
import { getRating } from 'store/actions'
import { push } from 'connected-react-router'

import { HomePage, RatingCard } from 'components'


const keys = ['wta', 'atp', 'other'];

const HomePageContainer = props => {

  const getParams = (key, page = props[key].page) => {
    return {
      size: props[key].size,
      sort: props[key].sort,
      filter: key,
      page,
    }
  }

  const handleRequest = key => {
    if (!props[key].data[props[key].page - 1]) {
      props.getRating(getParams(key));
    }
  }

  const [index, setIndex] = useState(0);


  useEffect(() => {
    handleRequest(keys[index]);
  }, [index])

  const handleRowClick = row => {
    props.push(`/player/${row.id}`);
  }

  const handlePageChange = key => (event, page) => {
    props.getRating(getParams(key, page));
  }

  return (<HomePage
    handleChangeTab={setIndex}
    keys={keys}
    index={index}
    tabContentArray={[
      <RatingCard
        data={props.wta}
        handleRowClick={handleRowClick}
        handlePageChange={handlePageChange('wta')}
      />,
      <RatingCard
        data={props.atp}
        handleRowClick={handleRowClick}
        handlePageChange={handlePageChange('atp')}
      />,
      <RatingCard
        data={props.other}
        handleRowClick={handleRowClick}
        handlePageChange={handlePageChange('other')}
      />,
    ]}
  />)
}

const mapStateToProps = (state) => ({
  atp: fromRatings.getATPRating(state),
  wta: fromRatings.getWTARating(state),
  other: fromRatings.getOtherRating(state),
})

const mapDispatchToProps = {
  getRating,
  push
}

HomePageContainer.propTypes = {
  getRating: PropTypes.func.isRequired,
  atp: PropTypes.object.isRequired,
  wta: PropTypes.object.isRequired,
  other: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
