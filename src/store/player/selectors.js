export const initialState = {
  player: null,
  matches: {
    page: 1,
    size: 20,
    sort: 'desc',
    total: 0,
    data: []
  },
  injuries: {
    page: 1,
    size: 20,
    sort: '1',
    total: 0,
    data: []
  },
  prediction: {
    result: null,
    otherPlayer: null
  }
}

export const getPlayer = (state = initialState) =>
  state.player || initialState.player;
export const getMatches = (state = initialState) => state.matches || initialState.matches;
export const getInjuries = (state = initialState) => state.injuries || initialState.injuries;
export const getPredictionResult = (state = initialState) => state.prediction.result ||
  initialState.prediction.result;
export const getPredictionOtherPlayer = (state = initialState) => state.prediction.otherPlayer ||
  initialState.prediction.otherPlayer;
