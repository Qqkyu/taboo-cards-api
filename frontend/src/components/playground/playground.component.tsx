import { FunctionComponent, useCallback, useState } from "react";

// const API_URL_PREFIX = `${window.location}api/`;
const API_URL_PREFIX = `http://localhost:7777/api/`;

export const Playground: FunctionComponent = () => {
  const [value, setValue] = useState("cards");
  const [response, setResponse] = useState<string | undefined>(undefined);

  const handleClick = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL_PREFIX}${value}`);
      const json = await response.json();
      const stringJson = JSON.stringify(json);
      setResponse(stringJson);
    } catch (e) {
      setResponse(undefined);
    }
  }, [value]);

  return (
    <div id="playground">
      <div className="join">
        <span className="bg-base-300 join-item flex h-12 items-center px-4">{API_URL_PREFIX}</span>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="input join-item input-bordered"
        />
        <button onClick={handleClick} className="btn join-item">
          Request
        </button>
      </div>
      {response ? <div>{response}</div> : null}
    </div>
  );
};
