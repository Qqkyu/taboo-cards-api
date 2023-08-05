import { FunctionComponent } from "react";

export const CardModel: FunctionComponent = () => {
  return (
    <table className="table-sm sm:table-md lg:table-lg table">
      <thead>
        <tr>
          <th className="prose prose-base lg:prose-lg text-base-content">Attribute</th>
          <th className="prose prose-base lg:prose-lg text-base-content text-center">Type</th>
          <th className="prose prose-base lg:prose-lg text-base-content">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="prose prose-sm lg:prose-base text-base-content">title</td>
          <td className="prose prose-sm lg:prose-base text-base-content text-center">string</td>
          <td className="prose prose-sm lg:prose-base text-base-content">Word to explain</td>
        </tr>
        <tr>
          <td className="prose prose-sm lg:prose-base text-base-content">forbiddenWords</td>
          <td className="prose prose-sm lg:prose-base text-base-content text-center">string[]</td>
          <td className="prose prose-sm lg:prose-base text-base-content">
            Five words that can&#39;t be used to explain title
          </td>
        </tr>
        <tr>
          <td className="prose prose-sm lg:prose-base text-base-content">difficulty</td>
          <td className="prose prose-sm lg:prose-base text-base-content text-center">string</td>
          <td className="prose prose-sm lg:prose-base text-base-content">
            &quot;easy&quot;, &quot;medium&quot;, or &quot;hard&quot;
          </td>
        </tr>
      </tbody>
    </table>
  );
};
