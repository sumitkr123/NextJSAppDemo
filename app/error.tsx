"use client";

import { FunctionComponent } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: FunctionComponent<ErrorProps> = ({ error, reset }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
