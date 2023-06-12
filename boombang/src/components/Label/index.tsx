import { useContext } from 'react'
import { MyContext } from '@/pages/about'
const Label = () => {
  const value = useContext(MyContext)
  if (value === false) return null
  return <span style={{ backgroundColor: 'red', padding: '10px' }}>Label</span>
}

export default Label
