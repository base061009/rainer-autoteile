export function isFormComplete(values: object, keys: readonly string[]) {
  return keys.every((key) => {
    const value = (values as Record<string, unknown>)[key];
    if (typeof value === "boolean") return value;
    return typeof value === "string" && value.trim().length > 0;
  });
}
