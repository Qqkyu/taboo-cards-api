import { Font } from "@/design-system/font/font.component";
import { FunctionComponent } from "react";

export const CardModel: FunctionComponent = () => {
  return (
    <table className="table-sm sm:table-md lg:table-lg table">
      <thead>
        <tr>
          <th>
            <Font.P2 color="text-base-content">Attribute</Font.P2>
          </th>
          <th className="text-center">
            <Font.P2 color="text-base-content">Type</Font.P2>
          </th>
          <th>
            <Font.P2 color="text-base-content">Description</Font.P2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Font.P1 color="text-base-content">title</Font.P1>
          </td>
          <td className="text-center">
            <Font.P1 color="text-base-content">string</Font.P1>
          </td>
          <td>
            <Font.P1 color="text-base-content">Word to explain</Font.P1>
          </td>
        </tr>
        <tr>
          <td>
            <Font.P1 color="text-base-content">forbiddenWords</Font.P1>
          </td>
          <td className="text-center">
            <Font.P1 color="text-base-content">string[]</Font.P1>
          </td>
          <td>
            <Font.P1 color="text-base-content">Five words that can&#39;t be used to explain the title</Font.P1>
          </td>
        </tr>
        <tr>
          <td>
            <Font.P1 color="text-base-content">difficulty</Font.P1>
          </td>
          <td className="text-center">
            <Font.P1 color="text-base-content">string</Font.P1>
          </td>
          <td>
            <Font.P1 color="text-base-content">&quot;easy&quot;, &quot;medium&quot;, or &quot;hard&quot;</Font.P1>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
