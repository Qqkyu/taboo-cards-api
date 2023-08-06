import { Font } from "@/design-system/font/font.component";
import { FunctionComponent } from "react";

export const Endpoints: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <Font.P1 color="text-base-content">
          There are currently two endpoints. The first endpoint returns all of the cards stored in the database. The
          response is the array of card objects.
        </Font.P1>
        <div className="mockup-code">
          <pre>
            <code>/api/cards</code>
          </pre>
        </div>
        <Font.P1 color="text-base-content">
          The second endpoint randomly chooses one card and returns it. The response is a single card object:
        </Font.P1>
        <div className="mockup-code">
          <pre>
            <code>/api/cards/random</code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Font.H3 color="text-base-content">Query parameters</Font.H3>
        <Font.P1 color="text-base-content">
          In both of the above endpoints, you can attach the following language and difficulty query parameters.
        </Font.P1>
        <div className="flex flex-col gap-4">
          <Font.H4 color="text-base-content">
            <code>language</code> query parameter
          </Font.H4>
          <Font.P1 color="text-base-content">
            Attach the <code>language</code> query parameter to get cards only in the provided language (either{" "}
            <code>en</code>
            or <code>pl</code>):
          </Font.P1>
          <div className="mockup-code">
            <pre>
              <code>/api/cards?language=en</code>
            </pre>
            <pre>
              <code>/api/cards?language=pl</code>
            </pre>
          </div>
          <Font.P1 color="text-base-content">
            Not providing the <code>language</code>
            query parameter is equal to providing <code>language=en</code>, so the following endpoints are equal:
          </Font.P1>
          <div className="mockup-code">
            <pre>
              <code>/api/cards</code>
            </pre>
            <pre>
              <code>/api/cards?language=en</code>
            </pre>
          </div>
          <Font.P1 color="text-base-content">
            In both of the above cases, array of cards in English will be returned.
          </Font.P1>
        </div>
        <div className="flex flex-col gap-4">
          <Font.H4 color="text-base-content">
            <code>difficulty </code> query parameter
          </Font.H4>
          <Font.P1 color="text-base-content">
            Attach the <code>difficulty </code> query parameter to get cards only with the provided difficulty (
            <code>easy</code>, <code>medium</code>, or <code>hard</code>):
          </Font.P1>
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
          <Font.P1 color="text-base-content">
            When the <code>difficulty</code> query parameter is not provided, the response will be:
          </Font.P1>
          <dl>
            <dt>
              <code>/api/cards</code>
            </dt>
            <dd className="pl-4">
              <Font.P1 color="text-base-content">All cards with mixed difficulties.</Font.P1>
            </dd>
            <dt>
              <code>/api/cards/random</code>
            </dt>
            <dd className="pl-4">
              <Font.P1 color="text-base-content">One card with any difficulty.</Font.P1>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};
