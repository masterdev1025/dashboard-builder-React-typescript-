import { Store } from 'redux';
import { IAppState, saveState } from './store/reducersDef';

const autoSaveAppState = (store: Store<IAppState>) => {

	const saveFrequency = 30000; // 30seconds * 1000milliseconds / 1second
	setInterval(() => (saveState(store.getState())), saveFrequency);
};

export const configureApp = (store: Store<IAppState>) => {
	autoSaveAppState(store);
};
