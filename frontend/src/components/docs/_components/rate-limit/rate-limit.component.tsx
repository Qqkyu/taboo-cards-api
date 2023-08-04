import { FunctionComponent } from "react";

export const RateLimit: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <p className="prose prose-sm lg:prose-base max-w-full">
          There is a 10000 requests per day API limit to prevent any malicious action. If you were to make more requests
          than this, you will get an error response with 429 status response (Too Many Requests).
        </p>
      </div>
    </div>
  );
};
