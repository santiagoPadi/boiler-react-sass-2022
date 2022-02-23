export const findIndexByKey = <T>(data: T[], key: any) => {
  const findIndex = data.findIndex((item: T) => item === key);
  return findIndex >= 0 ? findIndex : 0;
};

export const safeNavigation = <T>(data: T[] | undefined): T[] => [...(data ?? [])];
