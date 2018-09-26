import { prop } from 'ramda';
import renderProp from './render-prop';

const childrenRenderProp = renderProp(prop('children'));

export default childrenRenderProp;
