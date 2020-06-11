import {
  put, call, takeEvery, select,
} from 'redux-saga/effects'
import {
  GET_PLAYER,
  GET_MATCHES,
  GET_INJURIES,
  GET_PREDICTION,
  CREATE_MATCH,
  CREATE_INJURY,
  getPlayerSuccess,
  getMatchesSuccess,
  getInjuriesSuccess,
  getPredictionSuccess,
  createMatchSuccess,
  createInjurySuccess
} from './actions';
import api from '../../services/api';
import { fromPlayer } from 'store/selectors'
import { showError } from '../error/actions';
import { resolveRequestSuccess } from '../coach/actions';


export function* getPlayerSaga({ payload }) {
  try {
    // let data;
    const data = yield call([api, api.get], `/player/${payload}`)
    // if (payload === 2 ) {
    //   data = {
    //     id: 2,
    //     firstName: 'Ivan',
    //     lastName: 'Ivanov',
    //     hand: 'L',
    //     gender: 1,
    //     position: 2,
    //     dob: new Date(),
    //     userType: 1,
    //     country: 'UKR',
    //     photo: null,
    //     coach: {
    //       id: 2,
    //       text: 'Daniel Pilipets'
    //     }
    //   }
    // } else {
    //   data = {
    //     id: 4,
    //     firstName: 'Dana',
    //     lastName: 'Sapogova',
    //     hand: 'L',
    //     gender: 1,
    //     position: 2,
    //     dob: new Date(),
    //     userType: 1,
    //     country: 'UKR',
    //     photo: null,
    //     coach: {
    //       id: 2,
    //       text: 'Daniel Pilipets'
    //     },
    //     profyStatus: 0
    //   }
    // }
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(getPlayerSuccess(data))
    }
  } catch (e) {
    console.log(e);
  }
}

export function* getMatchesSaga({ payload }) {
  try {
    const data = yield call([api, api.get], `/player/${payload.playerId}/matches`, {
      params: {
        ...payload.params
      }
    })
    // const data = {
    //   page: 1,
    //   total: 50,
    //   size: 20,
    //   data: [{
    //     winner: {
    //       id: 123,
    //       firstName: 'Anna',
    //       lastName: 'Smykova',
    //     },
    //     loser: {
    //       id: 3,
    //       firstName: 'Denis',
    //       lastName: 'Tuchkov',
    //     },
    //     tournamentType: 'A',
    //     score: '6-2 7-5',
    //     date: new Date(),
    //     surface: 'Hard'
    //   }]
    // }
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(getMatchesSuccess(data))
    }
  } catch (e) {
    console.log(e);
  }
}

export function* getInjuriesSaga({ payload }) {
  try {
    const data = yield call([api, api.get], `/player/${payload.playerId}/injuries`, {
      params: {
        ...payload.params
      }
    })
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(getInjuriesSuccess(data))
    }
  } catch (e) {
    console.log(e);
  }
}

export function* createMatchSaga({ payload }) {
  try {
    const player = yield select(fromPlayer.getPlayer)
    const data = yield call([api, api.post], `/player/${player.id}/matches`, payload)
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(createMatchSuccess(data))
    }
  } catch (e) {
    console.log(e);
  }
}

export function* createInjurySaga({ payload }) {
  try {
    const player = yield select(fromPlayer.getPlayer)
    const data = yield call([api, api.post], `/player/${player.id}/injuries`, payload)
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(createInjurySuccess(data))
    }
  } catch (e) {
    console.log(e);
  }
}

export function* getPredictionSaga({ payload }) {
  try {
    const data = yield call([api, api.get], `/prediction/${payload.playerId}/${payload.otherPlayerId}`)
    // const data = {
    //   player: {
    //     id: 34,
    //     firstName: 'Natasha',
    //     lastName: 'Kovalyova',
    //     hand: 'R',
    //     gender: 1,
    //     position: 2,
    //     dob: new Date(),
    //     userType: 1,
    //     country: 'UKR',
    //     photo: null,
    //     coach: {
    //       id: 2,
    //       text: 'Daniel Pilipets'
    //     },
    //     profyStatus: 0
    //   },
    //   result: {win: .3, lose: .7}
    // }
    if (data.error) {
      yield put(showError(data.error))
    } else {
      yield put(getPredictionSuccess(data))
    }
  } catch (e) {
    yield put(showError(e))
    console.log(e);
  }
}

export default function* () {
  yield takeEvery(GET_PLAYER, getPlayerSaga)
  yield takeEvery(GET_MATCHES, getMatchesSaga)
  yield takeEvery(GET_INJURIES, getInjuriesSaga)
  yield takeEvery(CREATE_MATCH, createMatchSaga)
  yield takeEvery(CREATE_INJURY, createInjurySaga)
  yield takeEvery(GET_PREDICTION, getPredictionSaga)
}
