const initialState = {
  allChecked: true,
  noChecked: true,
  oneChecked: true,
  twoChecked: true,
  threeChecked: true,
}
const FILTER_CHANGE = 'FILTER_CHANGE'

function filterTicketsReducer(state = initialState, action) {
  const changeProp = (prop) => {
    const changePropState = { ...state, [prop]: !state[prop] }
    const all = changePropState.allChecked

    if (prop === 'allChecked' && all) {
      return {
        allChecked: true,
        noChecked: true,
        oneChecked: true,
        twoChecked: true,
        threeChecked: true,
      }
    }
    if (prop === 'allChecked' && !all) {
      return {
        allChecked: false,
        noChecked: false,
        oneChecked: false,
        twoChecked: false,
        threeChecked: false,
      }
    }
  }
  switch (action.type) {
    case FILTER_CHANGE:
      return changeProp(action.payload)

    default:
      return state
  }
}

export const filterChange = (prop) => ({ type: FILTER_CHANGE, payload: prop })

export default filterTicketsReducer
