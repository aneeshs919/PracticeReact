import { use, useState } from 'react'
import Child from './Child'

const ReactMemo = () => {
  const [count, setCount] = useState(0)
  const [title, changeTitle] = useState('Default title')
    console.log('Parent')
  return (
    <div>
      <div>{count}</div>
      <div onClick={() => setCount(count + 1)}></div>
      <div onClick={() => changeTitle('New title')}></div>
      <Child title={title} />
    </div>
  )
}

export default ReactMemo
