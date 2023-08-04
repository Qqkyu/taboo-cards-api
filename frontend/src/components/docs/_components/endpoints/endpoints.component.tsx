import { FunctionComponent } from "react";

export const Endpoints: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <p className="prose prose-sm lg:prose-base max-w-full">
          There are currently two endpoints. The first endpoint returns all of the cards stored in the database. The
          response is the array of card objects.
        </p>
        <div className="mockup-code">
          <pre>
            <code>/api/cards</code>
          </pre>
        </div>
        <p className="prose prose-sm lg:prose-base max-w-full">
          The second endpoint randomly chooses one card and returns it. The response is a single card object:
        </p>
        <div className="mockup-code">
          <pre>
            <code>/api/cards/random</code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="prose prose-lg lg:prose-xl font-medium">Query parameters</h3>
        <p className="prose prose-sm lg:prose-base max-w-full">
          In both of the above endpoints, you can attach the following language and difficulty query parameters.
        </p>
        <div className="flex flex-col gap-4">
          <h4 className="prose prose-base lg:prose-lg max-w-full">
            <code>language</code> query parameter
          </h4>
          <p className="prose prose-sm lg:prose-base max-w-full">
            Attach <code>language</code> query parameter to get cards only in the provided language (either{" "}
            <code>en</code>
            or <code>pl</code>):
          </p>
          <div className="mockup-code">
            <pre>
              <code>/api/cards?language=en</code>
            </pre>
            <pre>
              <code>/api/cards?language=pl</code>
            </pre>
          </div>
          <p className="prose prose-sm lg:prose-base max-w-full">
            Not providing <code>language</code>
            query parameter is equal to providing <code>language=en</code>, so the following endpoints are equal:
          </p>
          <div className="mockup-code">
            <pre>
              <code>/api/cards</code>
            </pre>
            <pre>
              <code>/api/cards?language=en</code>
            </pre>
          </div>
          <p className="prose prose-sm lg:prose-base max-w-full">
            In both of the above cases, array of cards in English will be returned.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="prose prose-base lg:prose-lg">
            <code>difficulty </code> query parameter
          </h4>
          <p className="prose prose-sm lg:prose-base max-w-full">
            Attach <code>difficulty </code> query parameter to get cards only with the provided difficulty (
            <code>easy</code>, <code>medium</code>, or <code>hard</code>):
          </p>
          <div className="mockup-code">
            <pre>
              <code>/api/cards?difficulty=easy</code>
            </pre>
            <pre>
              <code>/api/cards?difficulty=medium</code>
            </pre>
            <pre>
              <code>/api/cards?difficulty=hard</code>
            </pre>
          </div>
          <p className="prose prose-sm lg:prose-base max-w-full">
            When the <code>difficulty</code> query parameter is not provided, the response will be:
          </p>
          <dl>
            <dt>
              <code>/api/cards</code>
            </dt>
            <dd className="prose prose-sm lg:prose-base max-w-full pl-4">All cards with mixed difficulties.</dd>
            <dt>
              <code>/api/cards/random</code>
            </dt>
            <dd className="prose prose-sm lg:prose-base max-w-full pl-4">One card with any difficulty.</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};
