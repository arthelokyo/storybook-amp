import React, { useEffect, useState } from "react";
import { useAddonState } from "storybook/manager-api";
import { Badge } from "storybook/internal/components";

import { ADDON_ID, DEFAULT_STATE } from "./constants";
import getHtmlFormatForType from "./utils/getHtmlFormatForType";
import { validate } from "./validator";

export const Tool = () => {
  const [state] = useAddonState(ADDON_ID, DEFAULT_STATE);
  const { html, type, storyId } = state || {};

  const [isValid, setIsValid] = useState(undefined);

  useEffect(() => {
    let cancelled = false;

    if (!html) {
      setIsValid(undefined);
      return undefined;
    }

    validate(html, getHtmlFormatForType(type)).then(
      (result) => {
        if (!cancelled) setIsValid(result);
      },
      () => {
        if (!cancelled) setIsValid(undefined);
      }
    );

    return () => {
      cancelled = true;
    };
  }, [html, type, storyId]);

  if (typeof isValid === "undefined") {
    return null;
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", padding: "0 8px" }}
      title={
        isValid
          ? "This story is valid AMP"
          : "This story is invalid AMP. Open the AMP panel and click Validate for details."
      }
    >
      <Badge status={isValid ? "positive" : "negative"}>
        {isValid ? "AMP Valid" : "AMP Invalid"}
      </Badge>
    </div>
  );
};
