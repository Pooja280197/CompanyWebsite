export function titleToScrollWords(title: string, options?: { serif?: boolean }) {
  return title.split(/\s+/).filter(Boolean).map((text) => ({
    text,
    ...(options?.serif ? { serif: true as const } : {}),
  }));
}
