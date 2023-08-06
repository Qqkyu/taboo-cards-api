import { Font } from "@/design-system/font/font.component";
import { FunctionComponent } from "react";

export const RateLimit: FunctionComponent = () => {
  return (
    <Font.P1 color="text-base-content">
      There is a 10000 requests per day API limit to prevent any malicious action. If you were to make more requests
      than this, you will get an error response with 429 status response (Too Many Requests).
    </Font.P1>
  );
};
