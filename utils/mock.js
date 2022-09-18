export const generateData = (length) => {
  return Array(length)
    .fill(0)
    .map((i, index) => ({
      name: `Item ${index + 1}`
    }))
}