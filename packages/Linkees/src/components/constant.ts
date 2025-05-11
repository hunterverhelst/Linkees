import {
  faLinkedin,
  faGithub,
  faTelegram,
  faTwitter,
  faDribbble,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";

import { CHANNEL_TYPES } from "../constants";

export const CHANNEL_TYPE_VS_COVER_IMAGE = {
  [CHANNEL_TYPES.WEBSITE]: faCompass,
  [CHANNEL_TYPES.INSTAGRAM]: faInstagram,
  [CHANNEL_TYPES.LINKEDIN]: faLinkedin,
  [CHANNEL_TYPES.YOUTUBE]: faYoutube,
  [CHANNEL_TYPES.DRIBBLE]: faDribbble,
  [CHANNEL_TYPES.GITHUB]: faGithub,
  [CHANNEL_TYPES.TELEGRAM]: faTelegram,
  [CHANNEL_TYPES.TWITTER]: faTwitter,
};
