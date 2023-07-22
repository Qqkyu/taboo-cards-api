import { FunctionComponent } from "react";

export const CardModel: FunctionComponent = () => {
  return (
    <table className="table-lg table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th className="text-center">Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td className="text-center">string</td>
          <td>Word to explain</td>
        </tr>
        <tr>
          <td>forbiddenWords</td>
          <td className="text-center">string[]</td>
          <td>Five words that can&#39;t be used to explain title</td>
        </tr>
        <tr>
          <td>difficulty</td>
          <td className="text-center">string</td>
          <td>&quot;easy&quot;, &quot;medium&quot;, or &quot;hard&quot;</td>
        </tr>
      </tbody>
    </table>
  );
};
