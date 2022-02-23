const usePlatform = (): { isMobile: boolean } => {
  const width = window.innerWidth;
  return { isMobile: width < 768 };
};

export default usePlatform;
