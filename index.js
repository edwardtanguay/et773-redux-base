import {
	createStore
} from 'redux';

const startTime = performance.now();

const initialState = { value: 0 };

const increment = () => ({ type: "INCREMENT"});

const reducer = (state, action) => {
	if (action.type === 'INCREMENT') {
		return { value: state.value + 1 };
	}
	return state;
}

const store = createStore(reducer, initialState);

const subscriber = () => console.log("SUBSCRIBER", store.getState());

store.subscribe(subscriber);

store.dispatch(increment());
store.dispatch(increment());

console.log(store.getState());
const endTime = performance.now();

console.log(`took ${endTime - startTime} milliseconds`);