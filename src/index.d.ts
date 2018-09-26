// Type definitions for render-propper
// Project: render-propper
// Definitions by: Seth MacPherson <https://github.com/smacpherson64>

declare function renderProp(propCallback: Function): (componentLogic: Function) => Function;
declare function renderProp(propCallback: Function, componentLogic: Function): Function;

declare function childrenRenderProp(componentLogic: Function): Function;

export {
  renderProp,
  childrenRenderProp
}