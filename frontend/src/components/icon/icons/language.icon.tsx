import { type FunctionComponent } from "react";
import { type IconComponentProps } from "./icon-props";

export const LanguageIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <path
        fill={color}
        d="m20.58 19.37-2.99-8.36c-.21-.55-.68-.89-1.22-.89-.54 0-1 .34-1.23.91l-2.98 8.34a.75.75 0 1 0 1.41.51l.62-1.73h4.35l.62 1.73c.11.31.4.5.71.5.08 0 .17-.01.25-.04a.75.75 0 0 0 .45-.96l.01-.01Zm-5.84-2.73 1.64-4.59 1.64 4.59h-3.28Zm-2.55-8.79c-2.26 3.57-4.3 5.73-6.78 7.17a.746.746 0 0 1-1.02-.27.738.738 0 0 1 .27-1.02c2.1-1.22 3.82-2.97 5.75-5.87H4.12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.75V4.38c0-.41.34-.75.75-.75s.75.34.75.75v1.98h3.75c.41 0 .75.34.75.75s-.34.75-.75.75h-.94l.01-.01Zm.04 7.27c-.13 0-.26-.03-.38-.1-.65-.38-1.28-.8-1.87-1.24a.75.75 0 0 1 .9-1.2c.54.41 1.13.79 1.73 1.14a.752.752 0 0 1-.38 1.4Z"
      />
    </svg>
  );
};
