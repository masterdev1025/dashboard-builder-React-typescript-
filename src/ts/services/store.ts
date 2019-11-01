import { createStore} from 'redux';
import reducer from './dashboard1/reducers/index';

const store = createStore(reducer,{});
export default store;