import { Middleware } from "@reduxjs/toolkit";

export const logger : Middleware = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next', store.getState());
  return result;
}