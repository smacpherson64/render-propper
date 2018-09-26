import { prop } from 'ramda';
import { renderProp } from './render-prop';

export const childrenRenderProp = renderProp(prop('children'));
