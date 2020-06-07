export const initialState = {
  player: null,
  matches: {
    page: 1,
    size: 20,
    sort: 'desc',
    total: 80,
    data: []
  },
  injuries: {
    page: 1,
    size: 20,
    sort: '1',
    total: 150,
    data: [[{
      id: 1,
      injury: 1,
      date: new Date(),
      finishDate: new Date()
    }]]
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
export const getPredictionResult = (state = initialState) => state.injuries.result || initialState.injuries.result;
export const getPredictionOtherPlayer = (state = initialState) => state.injuries.otherPlayer ||
  initialState.injuries.otherPlayer;
