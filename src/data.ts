type RowKeyType = string

export const subRows: RowKeyType[][] = [
  ["a", "1"],
  ["a", "2"],
  ["a", "3"],
  ["b", "4"],
  ["b", "5"],
  ["b", "6"],
  ["c", "7"],
  ["d"],
]

export const dataByRows: Record<RowKeyType, string[]> = {
  "1": ["q", "w", "e"],
  "2": ["a", "s", "d"],
  "3": ["h", "j", "l"],
  "4": ["f", "g", "h"],
  "5": ["c", "v", "b"],
  "6": ["/", ".", ","],
  "7": ["p", "l", ","],
  d: ["g", "h", "y"],
}
