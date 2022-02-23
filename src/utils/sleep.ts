export const sleep = async (timeMS: number) => {
  await new Promise((resolve) => setTimeout(resolve, timeMS));
};
