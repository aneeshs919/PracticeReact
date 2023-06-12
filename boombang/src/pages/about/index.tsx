// Create a parent component that wraps child components with a Provider

import { useState, useContext, createContext, useEffect } from 'react'
// import { json } from 'stream/consumers'
// import { MyContext } from './myContaxt'
import List from '../../components/List'
import styles from './style.scss'

const MyContext = createContext()

const data = [
  {
    id: '#1',
    title: 'title1'
  },
  {
    id: '#2',
    title: 'title1'
  }
]

function MyComponent () {
  return data.map(item => (
    <List key={item.id} title={item.title} id={item.id} />
  ))
}

type ProductResponse = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

const getData = (data: ProductResponse) => {
  console.log('data', data)
}

const About = (props: any) => {
  const [check, setCheck] = useState(true)
  useEffect(() => {
   


    const fetcCall = () =>
      fetch('https://dummyjson.com/products/1')
        .then(data => data.json())
        .then((res: ProductResponse) => getData(res))
        .catch(() => console.log('error'))

    // const nomore = async () => {
    //   let response = await fetch('https://dummyjson.com/products/1')
    //   let user = await response.json()
    //   console.log('user', user)
    // }
    console.log('fetcCall', fetcCall())
  }, [])
  return (
    <div>
      <h1 className={styles.h1}>dsnajdnjn</h1>
      <input
        type='checkbox'
        checked={check}
        onChange={() => setCheck(!check)}
      />{' '}
      <MyContext.Provider value={check}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  )
}

export default About
export { MyContext }
