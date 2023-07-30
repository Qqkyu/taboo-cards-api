import { FunctionComponent } from "react";

export const CardModel: FunctionComponent = () => {
  return (
    <table className="table-lg table">
      <thead>
        <tr>
          <th className="prose prose-base lg:prose-lg">Attribute</th>
          <th className="prose prose-base lg:prose-lg text-center">Type</th>
          <th className="prose prose-base lg:prose-lg">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="prose prose-sm lg:prose-base">title</td>
          <td className="prose prose-sm lg:prose-base text-center">string</td>
          <td className="prose prose-sm lg:prose-base">Word to explain</td>
        </tr>
        <tr>
          <td className="prose prose-sm lg:prose-base">forbiddenWords</td>
          <td className="prose prose-sm lg:prose-base text-center">string[]</td>
          <td className="prose prose-sm lg:prose-base">Five words that can&#39;t be used to explain title</td>
        </tr>
        <tr>
          <td className="prose prose-sm lg:prose-base">difficulty</td>
          <td className="prose prose-sm lg:prose-base text-center">string</td>
          <td className="prose prose-sm lg:prose-base">&quot;easy&quot;, &quot;medium&quot;, or &quot;hard&quot;</td>
        </tr>
      </tbody>
    </table>
  );
};
