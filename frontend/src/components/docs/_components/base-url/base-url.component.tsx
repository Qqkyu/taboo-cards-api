import { WEB_API_URL_PREFIX } from "@/paths/api.paths";
import { FunctionComponent } from "react";

export const BaseUrl: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <p className="prose prose-sm lg:prose-base text-base-content max-w-full">
          The base URL is the prefix for the API:
        </p>
        <div className="mockup-code">
          <pre>
            <code>{WEB_API_URL_PREFIX}</code>
          </pre>
        </div>
        <p className="prose prose-sm lg:prose-base text-base-content max-w-full">
          This prefix is skipped in the whole documentation. It should always be prepended when communicating with the
          API.
        </p>
      </div>
    </div>
  );
};
