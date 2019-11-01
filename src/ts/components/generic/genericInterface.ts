import { Dispatch } from 'redux';
import {  ThemeTypes } from '../styles/themes';

export interface IGenericControl {
	theme: ThemeTypes;
	dispatch: Dispatch;
}