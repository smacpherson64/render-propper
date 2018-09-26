import { call, converge, curry } from 'ramda';

const renderProp = curry((propCallback, logic) =>
  converge(call, [propCallback, logic])
);

export default renderProp;
