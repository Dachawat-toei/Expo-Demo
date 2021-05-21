import React, { useEffect, useState } from 'react'
import MiniButton from '../MiniButton'
import { AntDesign } from '@expo/vector-icons'

interface IProps {
  count: number
  hasLiked: boolean
}
//ใช้ฟังก์ชั่นใส่onClick
//<button onclick="foo()">click me!</button>

const LikeButton = ({ count, hasLiked }: IProps) => {
  const [like, setLike] = useState(0)
  const [isActive, setActive] = useState(false)

  console.log(count, hasLiked)
  useEffect(() => {
    setLike(count)
  }, [count])

  useEffect(() => {
    setActive(hasLiked)
  }, [hasLiked])

  const likeAction = () => {
    if (!isActive) {
      setLike((pre) => pre + 1)
      setActive(true)
    } else {
      setLike((pre) => pre - 1)
      setActive(false)
    }
  }
  return <MiniButton onPress={likeAction} testID="likeBtn" title={`${like}`} />
}
// const [countBox, setCountBox] = useState<number>(0);
// //and set it as
// setCount(countBox + 1)

export default LikeButton
// export const example = () => {
//     console.log('example')
// }
