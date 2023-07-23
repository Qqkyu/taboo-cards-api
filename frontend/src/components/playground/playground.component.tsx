import { FunctionComponent, KeyboardEvent, useCallback, useState } from "react";
import ReactJson from "react-json-view";

const API_URL_PREFIX = `${window.location}api/`;

export const Playground: FunctionComponent = () => {
  const [value, setValue] = useState("cards");
  const [response, setResponse] = useState(undefined);

  const handleClick = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL_PREFIX}${value}`);
      const json = await response.json();
      setResponse(json);
    } catch (e) {
      setResponse(undefined);
    }
  }, [value]);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div id="playground" className="flex flex-col gap-8">
      <h2 className="prose prose-2xl">Playground</h2>
      <div className="join mb-5">
        <span className="bg-base-300 join-item flex h-12 items-center px-4">{API_URL_PREFIX}</span>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={handleKeyUp}
          value={value}
          className="input join-item input-bordered border-l-0 focus:outline-none"
          style={{ borderColor: "hsl(var(--b3))" }}
        />
        <button
          onClick={handleClick}
          className="btn bg-base-300 join-item border"
          style={{ borderColor: "hsl(var(--b3))" }}
        >
          Request
        </button>
      </div>
      {response ? <ReactJson src={response} theme="ocean" style={{ padding: "16px" }} /> : null}
    </div>
  );
};
