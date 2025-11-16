export const reactRules = {
  "react/react-in-jsx-scope": "off",
  "react/no-unescaped-entities": "off",
  "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
  "react/self-closing-comp": "error",
  "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
  "react/jsx-boolean-value": ["error", "never"],
  "react/function-component-definition": [
    "error",
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
};

export const reactHooksRules = {
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
};

export const reactYouMightNotNeedAnEffectRules = {
  "react-you-might-not-need-an-effect/no-derived-state": "warn",
  "react-you-might-not-need-an-effect/no-chain-state-updates": "warn",
  "react-you-might-not-need-an-effect/no-event-handler": "warn",
  "react-you-might-not-need-an-effect/no-adjust-state-on-prop-change": "warn",
  "react-you-might-not-need-an-effect/no-reset-all-state-on-prop-change": "warn",
  "react-you-might-not-need-an-effect/no-pass-live-state-to-parent": "warn",
  "react-you-might-not-need-an-effect/no-pass-data-to-parent": "warn",
  "react-you-might-not-need-an-effect/no-initialize-state": "warn",
  "react-you-might-not-need-an-effect/no-manage-parent": "warn",
  "react-you-might-not-need-an-effect/no-empty-effect": "warn",
};

export const reactCompilerRules = {
  "react-compiler/react-compiler": "error",
};

export const jsxA11yRules = {
  "jsx-a11y/alt-text": "error",
  "jsx-a11y/anchor-has-content": "error",
  "jsx-a11y/anchor-is-valid": "error",
  "jsx-a11y/aria-props": "error",
  "jsx-a11y/aria-proptypes": "error",
  "jsx-a11y/aria-role": "error",
  "jsx-a11y/aria-unsupported-elements": "error",
  "jsx-a11y/click-events-have-key-events": "warn",
  "jsx-a11y/heading-has-content": "error",
  "jsx-a11y/html-has-lang": "error",
  "jsx-a11y/img-redundant-alt": "error",
  "jsx-a11y/interactive-supports-focus": "warn",
  "jsx-a11y/label-has-associated-control": "error",
  "jsx-a11y/no-autofocus": "warn",
  "jsx-a11y/no-noninteractive-element-interactions": "warn",
  "jsx-a11y/no-static-element-interactions": "warn",
};

export const reactSettings = {
  react: {
    version: "detect",
  },
};
