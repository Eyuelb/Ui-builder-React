import { DefaultPageSlug, MethodType } from "../model";
import { isArrayEmpty } from "../utils/validate";

// Replace with call to your database
export const usePageInfo = (slug: DefaultPageSlug) => {
  if (isArrayEmpty(slug))
    return {
      name: "/",
      type: "view" as MethodType,
    };
  if (slug.length === 1 && slug[0] === "edit") {
    return {
      name: "/",
      type: slug[0] as MethodType,
    };
  }

  const name = slug[0];
  const type = slug[1] ?? "view";

  return {
    name,
    type,
  };
};
