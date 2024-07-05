import {Component} from 'react'

import './index.css'

import EachItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {givenList: initialTodosList}

  onDelete = id => {
    const {givenList} = this.state
    const filteredDate = givenList.filter(eachUser => eachUser.id !== id)
    this.setState({givenList: filteredDate})
  }

  render() {
    const {givenList} = this.state
    console.log(givenList)
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Simple Todos</h1>
          <ul>
            <div className="list-prop">
              {givenList.map(eachUser => (
                <EachItem
                  userDetails={eachUser}
                  key={eachUser.id}
                  deleteUser={this.onDelete}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
