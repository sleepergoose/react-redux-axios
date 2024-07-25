import { INCREMENT, DECREMENT } from './constants';

const initialState = {
  count: 0,
};

export default function counter(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count += payload };
    case DECREMENT:
      return { ...state, count: state.count -= payload };
    default:
      return state;
  }
}