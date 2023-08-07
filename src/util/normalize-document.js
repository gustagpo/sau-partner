export function normalizeDocument(value) {
  if (!value) return "";

  const cleanedStringInput = value.replace(/\D/g, "");

  if (cleanedStringInput.length === 11) {
    return cleanedStringInput.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );
  } else if (cleanedStringInput.length === 14) {
    return cleanedStringInput.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
  }

  return value;
}
