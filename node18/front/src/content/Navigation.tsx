// Navigation.tsx

import { FC } from "react";
import "./styles.css";

type Props = {
  open: boolean;
  id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
  return (
    <nav id={id} aria-hidden={!open} className="navigation">
      <ul>
        <li>about</li>
        <li>works</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};