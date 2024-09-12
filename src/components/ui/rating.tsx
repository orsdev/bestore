"use client";

import { Rating as ReactRating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface IRating {
  value: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  onChange?(value: number): void;
}

export const Rating = ({
  value,
  isDisabled = false,
  isReadOnly = false,
  onChange,
}: IRating) => {
  return (
    <ReactRating
      style={{
        width: 100,
      }}
      isDisabled={isDisabled}
      readOnly={isReadOnly}
      value={value}
      onChange={onChange}
    />
  );
};
