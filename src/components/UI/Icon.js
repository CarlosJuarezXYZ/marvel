/** @jsxImportSource @emotion/react */

import {
  RiFacebookCircleFill,
  RiSlackFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGoogleFill,
  RiStarFill,
  RiMailLine,
  RiWechatLine,
  RiEmotionUnhappyLine,
} from "react-icons/ri";

import { css } from "@emotion/react";
import { colors } from "../../ui";

const iconSet = {
  fb: RiFacebookCircleFill,
  slack: RiSlackFill,
  twitter: RiTwitterFill,
  linkedin: RiLinkedinBoxFill,
  google: RiGoogleFill,
  start: RiStarFill,
  email: RiMailLine,
  chat: RiWechatLine,
  notFound: RiEmotionUnhappyLine,
};

function Icon({ type, fill = colors.bgIcon, size = 35 }) {
  const IconComponent = iconSet[type];
  return (
    <IconComponent
      css={css`
        fill: ${fill};
        font-size: ${size}px;
        @media (max-width: 500px) {
          font-size: 20px;
        }
      `}
    />
  );
}

export default Icon;
