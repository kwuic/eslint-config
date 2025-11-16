import type React from "react";

export const ExampleComponent = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-shrink-0">
        This uses the old flex-shrink-0 class (should error and suggest shrink-0)
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-purple-600">
        This uses bg-gradient-to-br (v3 syntax, should be bg-linear-to-br in v4)
        Note: Currently not auto-fixed by eslint-plugin-tailwindcss
      </div>

      <div className="shrink-0">This correctly uses shrink-0 (v3+ canonical)</div>

      <div className="bg-linear-to-br from-blue-500 to-purple-600">
        This correctly uses bg-linear-to-br (v4 canonical)
      </div>
    </div>
  );
};
