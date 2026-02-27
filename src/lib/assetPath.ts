export function assetPath(path: string): string {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath) return path;
  if (!path.startsWith("/")) return path;

  return `${basePath}${path}`;
}
