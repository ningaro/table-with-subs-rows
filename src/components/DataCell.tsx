import { Td } from "../styles"

export default function DataCells({ data }: { data: string[] }) {
  return data.map((elem) => <Td key={elem}>{elem}</Td>)
}
