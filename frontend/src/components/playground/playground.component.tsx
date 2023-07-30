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
        <div className="bg-base-300 collapse-arrow collapse">
          <input type="checkbox" />
          <div className="collapse-title prose prose-lg lg:prose-xl font-medium">Examples</div>
          <div className="collapse-content">
            <ul>
              <li className="mb-4">
                <h3 className="mb-2">
                  <code>/api/cards</code> endpoint:
                </h3>
                <dl className="pl-4">
                  <ExampleApiPath path="cards" description="All cards." />
                  <ExampleApiPath path="cards?language=pl" description="All cards in Polish language." />
                  <ExampleApiPath path="cards?difficulty=hard" description="All cards with hard difficulty." />
                </dl>
              </li>
              <li className="mb-4">
                <h3 className="mb-2">
                  <code>/api/cards/random</code> endpoint:
                </h3>
                <dl className="pl-4">
                  <ExampleApiPath path="cards/random" description="Random card." />
                  <ExampleApiPath path="cards/random?language=pl" description="Random card in Polish language." />
                  <ExampleApiPath path="cards/random?difficulty=easy" description="Random card in easy difficulty." />
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
            className="input join-item input-bordered w-24 !rounded-r-lg px-2 text-sm focus:outline-none sm:w-auto lg:!rounded-r-none lg:px-4 lg:text-base"
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

type ExampleApiPathProps = {
  path: string;
  description: string;
};

const ExampleApiPath: FunctionComponent<ExampleApiPathProps> = ({ path, description }) => {
  const [wasCopied, setWasCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    setWasCopied(true);
    await navigator.clipboard.writeText(path);
    setTimeout(() => setWasCopied(false), 2000);
  }, [path]);

  return (
    <>
      <dt className="flex items-center">
        <code>{path}</code>
        <button
          className={`btn btn-xs border-none !bg-transparent ${wasCopied ? "btn-disabled" : ""}`}
          title="Copy to clipboard"
          onClick={handleCopy}
        >
          <Icon type={wasCopied ? "checkmark" : "copy"} className="h-full w-4" color="hsl(var(--bc))" />
        </button>
      </dt>
      <dd className="prose prose-sm lg:prose-base mb-1 pl-4">{description}</dd>
    </>
  );
};
