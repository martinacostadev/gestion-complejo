import getCourts from "../services/courts";

export const useCourts = () => {
  const courts = getCourts();
  return { courts } as const;
};
