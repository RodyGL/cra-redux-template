import { createStore, combineReducers, Dispatch } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

declare module 'react-redux' {
  export function useDispatch<TDispatch = Dispatch<StoreEvent>>(): TDispatch;
  export function useDispatch<A extends StoreEvent = StoreEvent>(): Dispatch<A>;

  export function useSelector<TState = Store, TSelected = unknown>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
}

interface Store {}

type StoreEvent = unknown;

const configureStore = () => {
  const composedEnhancers = composeWithDevTools();
  const store = createStore(
    combineReducers(() => ({})),
    composedEnhancers
  );

  return store;
};

export default configureStore;
