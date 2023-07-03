type Path = string | string[];

export default function get(object: Record<string, any>, path: Path, defaultValue: any = undefined) {
  const formattedPath = formatPath(path);
  let value = defaultValue;

  for(let i = 0; i < formattedPath.length; i++) {
    const key = formattedPath[i];
    try {
      value = i === 0 ? object[key] : value[key];
    } catch {
      return undefined;
    }

    if (value === undefined) {
      return defaultValue;
    }
  }

  return value;
}

function formatPath(path: Path) {
  if (typeof path === 'string') {
    return path.split('.');
  }
  return path;
}