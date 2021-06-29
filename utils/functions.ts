export const convertMessage = (origin: string, ...strings: string[]): string => {
  return strings.reduce((converted, string, index) => {
    return converted.replace(`{${index}}`, string)
  }, origin)
}
