import Label from '../Label'
interface listProps {
    id: string
    title: string 
}

const List = (props: listProps) => {
  return (
    <div>
      <div>{props.id}</div>
      <div>{props.title}</div>
      <Label />
    </div>
  )
}

export default List
