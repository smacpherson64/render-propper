// Type definitions for render-propper
// Project: render-propper
// Definitions by: Seth MacPherson <https://github.com/smacpherson64>

declare function renderProp<Input = any, Results = any, Output = any>(
  renderer: (input: Input) => (results: Results) => Output
): (logic: (input: Input) => Results) => (input: Input) => Output;

declare function renderProp<Input = any, Results = any, Output = any>(
  renderer: (input: Input) => (results: Results) => Output,
  logic: (input: Input) => Results
): (input: Input) => Output;

declare function childrenRenderProp<Input = any, Results = any, Output = any>(
  logic: (input: Input) => Results
): (input: Input) => Output;

export { renderProp, childrenRenderProp };
