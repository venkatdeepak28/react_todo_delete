// Write your code here
import './index.css'

const EachItem = props => {
  const {userDetails, deleteUser} = props
  const {id, title} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  console.log(title)
  return (
    <li className="list-container">
      <div>
        <p className="para">{title}</p>
      </div>
      <div className="button-container">
        <button className="custom-btn" type="submit" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default EachItem
