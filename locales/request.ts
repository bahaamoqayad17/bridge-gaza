import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const locale = "ar";

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  };
});
