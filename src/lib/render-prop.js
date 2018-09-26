import { call, converge, curry } from 'ramda';

export const renderProp = curry((propCallback, logic) =>
  converge(call, [propCallback, logic])
);
