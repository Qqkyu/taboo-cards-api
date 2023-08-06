import { Font } from "@/design-system/font/font.component";
import { WEB_API_URL_PREFIX } from "@/paths/api.paths";
import { FunctionComponent } from "react";

export const BaseUrl: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <Font.P1 color="text-base-content">The base URL is the prefix for the API:</Font.P1>
        <div className="mockup-code">
          <pre>
            <code>{WEB_API_URL_PREFIX}</code>
          </pre>
        </div>
        <Font.P1 color="text-base-content">
          This prefix is skipped in the whole documentation. It should always be prepended when communicating with the
          API.
        </Font.P1>
      </div>
    </div>
  );
};
