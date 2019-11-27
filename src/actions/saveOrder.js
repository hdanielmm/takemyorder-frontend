import saveOrder from '../utils/api';
export const SAVE_ORDER_BD = 'SAVE_ORDER_BD';

export const saveOrderBD = (itemId, name, quantity) => saveOrder(itemId, name, quantity)