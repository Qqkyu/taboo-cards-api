import { FunctionComponent, KeyboardEvent, useCallback, useEffect, useState } from "react";
import ReactJson from "react-json-view";
import { Icon } from "@/components/icon/icon.component";
import { Card } from "@/types/card.types";
import { API_URL_PREFIX, CARDS_PATHS } from "@/paths/api.paths";

export const Playground: FunctionComponent = () => {
  const [value, setValue] = useState("cards/random");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Card | Array<Card> | "error">(undefined);

  const getResponse = useCallback(async (path: string) => {
    try {
      const response = await fetch(path);
      const data = await response.json();
      setResponse(data.data);
    } catch (e) {
      setResponse("error");
    }
  }, []);

  useEffect(() => {
    getResponse(`${API_URL_PREFIX}${CARDS_PATHS.random}`);
  }, [getResponse]);

  const handleClick = useCallback(async () => {
    setIsLoading(true);
    await getResponse(`${API_URL_PREFIX}${value}`);
    setIsLoading(false);
  }, [getResponse, value]);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div id="playground" className="flex flex-col gap-8">
      <h2 className="prose prose-xl lg:prose-2xl font-semibold">Playground</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-base-200 collapse">
          <input type="checkbox" />
          <div className="collapse-title prose prose-lg lg:prose-xl font-medium">Examples</div>
          <div className="collapse-content">
            <ul>
              <li className="mb-4">
                <h3 className="mb-2">
                  <code>/api/cards</code> endpoint:
                </h3>
                <dl className="pl-4">
                  <dt>
                    <code>cards</code>
                  </dt>
                  <dd className="prose prose-sm lg:prose-base mb-1 pl-4">All cards.</dd>
                  <dt>
                    <code>cards?language=pl</code>
                  </dt>
                  <dd className="prose prose-sm lg:prose-base mb-1 pl-4">All cards in Polish language.</dd>
                  <dt>
                    <code>cards?difficulty=hard</code>
                  </dt>
                  <dd className="prose prose-sm lg:prose-base mb-1 pl-4">All cards with hard difficulty.</dd>
                </dl>
              </li>
              <li className="mb-4">
                <h3 className="mb-2">
                  <code>/api/cards/random</code> endpoint:
                </h3>
                <dl className="pl-4">
                  <dt>
                    <code>cards/random</code>
                  </dt>
                  <dd className="prose prose-sm lg:prose-base mb-1 pl-4">Random card.</dd>
                  <dt>
                    <code>cards/random?language=pl</code>
                  </dt>
                  <dd className="prose prose-sm lg:prose-base mb-1 pl-4">Random card in Polish language.</dd>
                  <dt>
                    <code>cards/random?difficulty=easy</code>
                  </dt>
                  <dd className="prose prose-sm lg:prose-base mb-1 pl-4">Random card in easy difficulty.</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div className="join">
          <span className="bg-base-300 join-item flex h-12 items-center px-2 text-sm lg:px-4 lg:text-base">
            https://taboocardsapi.com/api/
          </span>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleKeyUp}
            value={value}
            className="input join-item input-bordered !rounded-r-lg px-2 text-sm focus:outline-none lg:!rounded-r-none lg:px-4 lg:text-base"
            style={{ borderColor: "hsl(var(--b3))" }}
          />
          <button
            onClick={handleClick}
            className="btn bg-base-300 join-item hidden w-24 border lg:block"
            style={{ borderColor: "hsl(var(--b3))" }}
          >
            {isLoading ? <span className="loading loading-spinner" /> : "Request"}
          </button>
        </div>
        <button
          onClick={handleClick}
          className="btn bg-base-300 join-item block border lg:hidden"
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
