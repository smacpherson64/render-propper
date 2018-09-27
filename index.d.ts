// Type definitions for render-propper
// Project: render-propper
// Definitions by: Seth MacPherson <https://github.com/smacpherson64>

declare function renderProp<Input, Results, Output>(
  renderer: (input: Input) => (results: Results) => Output
): (logic: (input: Input) => Results) => (input: Input) => Output;

declare function renderProp<Input, Results, Output>(
  renderer: (input: Input) => (results: Results) => Output,
  logic: (input: Input) => Results
): (input: Input) => Output;

declare function childrenRenderProp<Input, Results, Output>(
  logic: (input: Input) => Results
): (input: Input) => Output;

export { renderProp, childrenRenderProp };
