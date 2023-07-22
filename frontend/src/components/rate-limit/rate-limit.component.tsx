import { FunctionComponent } from "react";

export const RateLimit: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="prose">
          There is a 100 requests per day API limit to prevent any malicious action. If you were to make more requests
          than this, you will get error response with 429 status response (Too Many Requests). This will likely be
          increased in the near future.
        </p>
      </div>
    </div>
  );
};
