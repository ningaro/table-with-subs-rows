import React, { useCallback, useEffect, useState } from "react"
import { subRows, dataByRows } from "./data"
import CollapseElem from "./components/CollapseElem"
import { Table, Tr, Th } from "./styles"
import DataCells from "./components/DataCell"

export default function App() {
  const [rows, setRows] = useState<
    Record<string, { value: string[]; isShow: boolean }>
  >({})

  useEffect(() => {
    subRows.forEach(([rowKey, subRowKey]) => {
      setRows((prevRows) => ({
        ...prevRows,
        [rowKey]: {
          value: subRowKey
            ? [...(prevRows[rowKey]?.value ?? []), subRowKey]
            : [...(prevRows[rowKey]?.value ?? [])],
          isShow: true,
        },
      }))
    })
  }, [])

  const changeRowMode = useCallback(
    (rowKey: string) =>
      setRows((prevRows) => ({
        ...prevRows,
        [rowKey]: {
          ...prevRows[rowKey],
          isShow: !prevRows[rowKey].isShow,
        },
      })),
    []
  )

  return (
    <Table>
      <tbody>
        {Object.keys(rows).map((rowKey) => (
          <React.Fragment key={rowKey}>
            <Tr show>
              <Th>
                <CollapseElem
                  isShow={!!rows[rowKey].value.length}
                  onClick={() => changeRowMode(rowKey)}
                />{" "}
                {rowKey}
              </Th>
              <DataCells data={dataByRows[rowKey] ?? []} />
            </Tr>
            {rows[rowKey].value.map((subRowKey) => (
              <Tr key={subRowKey} show={rows[rowKey].isShow}>
                <Th>{subRowKey}</Th>
                <DataCells data={dataByRows[subRowKey] ?? []} />
              </Tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  )
}
