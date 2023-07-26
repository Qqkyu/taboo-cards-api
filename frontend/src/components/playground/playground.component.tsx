import { FunctionComponent, KeyboardEvent, useCallback, useState } from "react";
import ReactJson from "react-json-view";
import { Icon } from "@/components/icon/icon.component";

const API_URL_PREFIX = `https://${window.location.hostname}/api/`;

export const Playground: FunctionComponent = () => {
  const [value, setValue] = useState("cards");
  const [response, setResponse] = useState<undefined | Record<string, unknown> | "error">(undefined);

  const handleClick = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL_PREFIX}${value}`);
      const json = await response.json();
      setResponse(json);
    } catch (e) {
      setResponse("error");
    }
  }, [value]);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div id="playground" className="flex flex-col gap-8">
      <h2 className="prose prose-2xl font-semibold">Playground</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="join">
          <span className="bg-base-300 join-item flex h-12 items-center px-4">{API_URL_PREFIX}</span>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleKeyUp}
            value={value}
            className="input join-item input-bordered !rounded-r-lg focus:outline-none md:!rounded-r-none"
            style={{ borderColor: "hsl(var(--b3))" }}
          />
          <button
            onClick={handleClick}
            className="btn bg-base-300 join-item hidden border md:block"
            style={{ borderColor: "hsl(var(--b3))" }}
          >
            Request
          </button>
        </div>
        <button
          onClick={handleClick}
          className="btn bg-base-300 join-item block border md:hidden"
          style={{ borderColor: "hsl(var(--b3))" }}
        >
          Request
        </button>
      </div>
      {response &&
        (response === "error" ? (
          <div className="alert alert-error">
            <Icon type="error" className="h-6 w-6 shrink-0" color="hsl(var(--b3))" />
            <span>Error! Invalid URL.</span>
          </div>
        ) : (
          <ReactJson src={response} theme="ocean" style={{ padding: "16px" }} />
        ))}
    </div>
  );
};
