import styled from "styled-components"

export const Table = styled.table`
  background-color: #eee;
`

export const Tr = styled.tr<{ show: boolean }>`
  margin: 100px;
  border: 1px solid black;
  display: ${({ show }) => (show ? "table-row" : "none")};
`

export const Th = styled.th`
  border: 1px solid black;
`

export const Td = styled.td`
  border: 1px solid black;
`

export const Span = styled.span`
  cursor: pointer;
  user-select: none;
`
