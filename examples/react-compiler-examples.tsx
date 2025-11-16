/**
 * Examples of React Compiler violations detected by eslint-plugin-react-compiler
 * React 19 introduces automatic memoization via the React Compiler
 * This plugin ensures code follows Rules of React for optimal compiler performance
 */

import type { ReactNode } from "react";
import { useState } from "node:react";

// ❌ VIOLATION: Mutating props
type BadPropsProps = {
  items: string[];
};

const BadPropsComponent = ({ items }: BadPropsProps): ReactNode => {
  // This mutates the prop directly - React Compiler cannot optimize
  items.push("new item");
  return <div>{items.join(", ")}</div>;
};

// ✅ GOOD: Create new array instead of mutating
const GoodPropsComponent = ({ items }: BadPropsProps): ReactNode => {
  const newItems = [...items, "new item"];
  return <div>{newItems.join(", ")}</div>;
};

// ❌ VIOLATION: Mutating state directly
const BadStateComponent = (): ReactNode => {
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  const updateAge = (): void => {
    // This mutates state directly - prevents optimization
    user.age = 26;
    setUser(user);
  };

  return <button onClick={updateAge}>{user.name}</button>;
};

// ✅ GOOD: Create new object
const GoodStateComponent = (): ReactNode => {
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  const updateAge = (): void => {
    setUser({ ...user, age: 26 });
  };

  return <button onClick={updateAge}>{user.name}</button>;
};

// ❌ VIOLATION: Conditional hooks
const BadConditionalHooks = ({ isAdmin }: { isAdmin: boolean }): ReactNode => {
  if (isAdmin) {
    // Hooks must be called unconditionally
    const [adminData] = useState("admin");
    return <div>{adminData}</div>;
  }
  return <div>Regular user</div>;
};

// ✅ GOOD: Hooks at top level
const GoodConditionalHooks = ({ isAdmin }: { isAdmin: boolean }): ReactNode => {
  const [adminData] = useState("admin");

  if (isAdmin) {
    return <div>{adminData}</div>;
  }
  return <div>Regular user</div>;
};

// ❌ VIOLATION: Ref assignment in render
const BadRefUsage = (): ReactNode => {
  const inputRef = { current: null };

  // Assigning to ref.current during render
  inputRef.current = document.querySelector("input");

  return <input />;
};

// ✅ GOOD: Use useRef and effects
const GoodRefUsage = (): ReactNode => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Side effects in useEffect
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  return <input ref={inputRef} />;
};

// ❌ VIOLATION: Creating objects in render
const BadObjectCreation = ({ userId }: { userId: string }): ReactNode => {
  // Creating new object on every render prevents memoization
  const config = { id: userId, timestamp: Date.now() };

  return <ChildComponent config={config} />;
};

// ✅ GOOD: Use useMemo for objects
const GoodObjectCreation = ({ userId }: { userId: string }): ReactNode => {
  const config = useMemo(() => ({ id: userId, timestamp: Date.now() }), [userId]);

  return <ChildComponent config={config} />;
};

/**
 * Why React Compiler matters:
 *
 * React 19 Compiler automatically:
 * - Memoizes components without manual useMemo/useCallback
 * - Optimizes re-renders
 * - Reduces bundle size by removing unnecessary memoization code
 *
 * But it ONLY works if you follow Rules of React:
 * - Don't mutate props or state
 * - Call hooks unconditionally
 * - Keep components pure
 * - Handle side effects in useEffect
 *
 * This ESLint plugin catches violations that would prevent
 * the compiler from optimizing your components.
 */

export {};
