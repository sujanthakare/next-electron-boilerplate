export const VIEW_PORT_MAX_WIDTH = "114rem";

// Media Query limits
export const PHONE_MAX = 580;
export const TAB_MAX = 1024;

export const deviceQuery = {
  PHONE: `@media (max-width: ${PHONE_MAX}px)`,
  TAB: `@media (min-width:${PHONE_MAX + 1}px) and (max-width: ${TAB_MAX}px)`,
  TAB_AND_PHONE: `@media (max-width: ${TAB_MAX}px)`,
  TAB_AND_DESKTOP: `@media (min-width:${PHONE_MAX + 1}px)`,
  DESKTOP: `@media (min-width:${TAB_MAX + 1}px)`,
};
