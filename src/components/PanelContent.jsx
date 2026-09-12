import React from "react";
import { Bar, Button, EmptyTabContent, SyntaxHighlighter } from "storybook/internal/components";

import getBase64ForAMPValidator from "../utils/getBase64ForAMPValidator";
import getHtmlFormatForType from "../utils/getHtmlFormatForType";
import getAmpLabelForType from "../utils/getAmpLabelForType";

const ONLINE_VALIDATOR_URL = "https://validator.ampproject.org/";

export const PanelContent = ({ data }) => {
  const { type, html } = data || {};

  if (!html) {
    return (
      <EmptyTabContent
        title="No AMP output for this story"
        description="Enable the addon with the `amp` parameter to see the AMP Html generated for a story."
      />
    );
  }

  const handleValidate = () => {
    const htmlFormat = getHtmlFormatForType(type);
    window.open(
      `${ONLINE_VALIDATOR_URL}#doc=${getBase64ForAMPValidator(html)}${
        htmlFormat ? `&htmlFormat=${htmlFormat}` : ""
      }`,
      `_newtab${Date.now()}`
    );
  };

  const typeLabel = getAmpLabelForType(type);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Bar innerStyle={{ justifyContent: "space-between" }}>
        <span>Output{typeLabel ? ` (${typeLabel})` : ""}</span>
        <Button
          variant="outline"
          size="small"
          onClick={handleValidate}
          ariaLabel="Validate this story with the online AMP validator"
          tooltip={`Validate this story using ${ONLINE_VALIDATOR_URL}`}
        >
          Validate
        </Button>
      </Bar>
      <div style={{ flex: 1, position: "relative" }} className="storybook-amp-source-code">
        <SyntaxHighlighter
          language="html"
          format={false}
          copyable
          padded
          showLineNumbers
          bordered={false}
        >
          {html}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
