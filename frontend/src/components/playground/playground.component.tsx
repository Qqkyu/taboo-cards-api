import { FunctionComponent, KeyboardEvent, useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/icon/icon.component";
import { API_URL_PREFIX, CARDS_PATHS, WEB_API_URL_PREFIX } from "@/paths/api.paths";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Font } from "@/design-system/font/font.component";

export const Playground: FunctionComponent = () => {
  const [value, setValue] = useState("cards/random");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string>(undefined);

  const getResponse = useCallback(async (path: string) => {
    try {
      const response = await fetch(path);
      const json = await response.json();
      setResponse(JSON.stringify(json, null, 2));
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
    <div className="flex w-[300px] flex-col gap-8 sm:w-[500px] lg:w-[750px]">
      <Font.H2 color="text-base-content">Playground</Font.H2>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-base-300 collapse-arrow collapse rounded-lg">
          <input type="checkbox" />
          <div className="collapse-title">
            <Font.H3 color="text-base-content">Examples</Font.H3>
          </div>
          <div className="collapse-content">
            <ul>
              <li className="mb-4">
                <div className="mb-2">
                  <Font.H4 color="text-base-content">
                    <code>/api/cards</code> endpoint:
                  </Font.H4>
                </div>
                <dl className="pl-2 sm:pl-4">
                  <ExampleApiPath path="cards" description="All cards." />
                  <ExampleApiPath path="cards?language=pl" description="All cards in Polish language." />
                  <ExampleApiPath path="cards?difficulty=hard" description="All cards with hard difficulty." />
                </dl>
              </li>
              <li className="mb-4">
                <div className="mb-2">
                  <Font.H4 color="text-base-content">
                    <code>/api/cards/random</code> endpoint:
                  </Font.H4>
                </div>
                <dl className="pl-2 sm:pl-4">
                  <ExampleApiPath path="cards/random" description="A random card." />
                  <ExampleApiPath path="cards/random?language=pl" description="A random card in Polish language." />
                  <ExampleApiPath path="cards/random?difficulty=easy" description="A random card in easy difficulty." />
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div className="join w-full">
          <span className="bg-base-300 join-item flex h-12 items-center rounded-l-lg px-2 text-sm lg:px-4 lg:text-base">
            {WEB_API_URL_PREFIX}
          </span>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleKeyUp}
            value={value}
            className="input join-item input-bordered w-24 grow !rounded-r-lg px-2 text-sm focus:outline-none sm:w-auto lg:!rounded-r-none lg:px-4 lg:text-base"
            style={{ borderColor: "hsl(var(--b3))" }}
          />
          <button
            onClick={handleClick}
            className="btn bg-base-300 join-item hidden w-24 rounded-r-lg border sm:block"
            style={{ borderColor: "hsl(var(--b3))" }}
          >
            {isLoading ? <span className="loading loading-spinner" /> : "Request"}
          </button>
        </div>
        <button
          onClick={handleClick}
          className="btn bg-base-300 join-item block border sm:hidden"
          style={{ borderColor: "hsl(var(--b3))" }}
        >
          Request
        </button>
      </div>
      {response ? (
        response === "error" ? (
          <div className="alert alert-error">
            <Icon type="error" className="h-6 w-6 shrink-0" color="hsl(var(--b3))" />
            <Font.P1 color="text-error-content">Error! Invalid URL.</Font.P1>
          </div>
        ) : (
          <div className="mockup-code bg-base-300">
            {response.split("\n").map((line, idx) => (
              <pre key={idx}>
                <code>{line}</code>
              </pre>
            ))}
          </div>
        )
      ) : (
        <Skeleton
          baseColor="hsl(var(--b3))"
          highlightColor="hsl(var(--b2))"
          borderRadius="8px"
          height="380px"
          duration={3}
        />
      )}
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
        <Font.P1 color="text-base-content">
          <code>{path}</code>
        </Font.P1>
        <button
          className={`btn btn-xs border-none !bg-transparent ${
            wasCopied ? "btn-disabled tooltip tooltip-top sm:tooltip-right tooltip-open" : ""
          }`}
          title="Copy to clipboard"
          onClick={handleCopy}
          data-tip="Copied"
        >
          <Icon
            type={wasCopied ? "checkmark" : "copy"}
            className="h-full w-3 sm:w-4"
            color={`hsl(var(--${wasCopied ? "su" : "bc"}))`}
          />
        </button>
      </dt>
      <dd className="mb-1 pl-2 sm:pl-4">
        <Font.P1 color="text-base-content">{description}</Font.P1>
      </dd>
    </>
  );
};
