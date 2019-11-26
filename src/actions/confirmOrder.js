export const CONFIRM_ORDER = 'CONFIRM_ORDER';

export const confirmOrder = order => {
  return {
    type: CONFIRM_ORDER,
    payload: order
  };
};