export const getDomainFromUrl = (url: string) => {
  let result = '';
  if (!url) return '';
  const match = url.match(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^/\n?=]+)/im,
  );
  if (match && match[1]) result = match[1];
  return result;
};
