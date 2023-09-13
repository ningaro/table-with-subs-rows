import { Span } from "../styles"

export default function CollapseElem({
  onClick,
  isShow,
}: {
  onClick: () => void
  isShow: boolean
}) {
  return isShow ? <Span onClick={onClick}>+</Span> : null
}
