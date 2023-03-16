function ListGroup() {
  let items = ['cairo', 'madrid', 'london']
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
export default ListGroup
