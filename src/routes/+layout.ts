import type { LayoutData } from "./$types";

export const load: LayoutData = ({ url, params }) => {
  return {
    url,
    route: params.rest,
  };
};
