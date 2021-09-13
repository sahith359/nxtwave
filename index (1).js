import {Component} from 'react'
import About from '../About'
import './index.css'

class Home extends Component {
  state = {peopleData: [], searchInp: ''}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      ' https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json',
    )
    const data = await response.json()
    console.log(data)
    this.setState({peopleData: data})
  }

  onSearch = event => {
    this.setState({searchInp: event.target.value})
  }

  deleteThings = id => {
    const {peopleData} = this.state
    const deletedData = peopleData.filter(each => each.id !== id)
    this.setState({peopleData: deletedData})
  }

  getSearchData = () => {
    const {searchInp, peopleData} = this.state
    const formattedData = peopleData.filter(each =>
      each.name.toLowerCase().includes(searchInp.toLowerCase()),
    )
    return formattedData
  }

  render() {
    const {peopleData, searchInp} = this.state
    const searchResults = this.getSearchData()
    return (
      <div>
        <input
          type="search"
          placeholder="Search by name,email or role"
          className="inp-home1"
          onChange={this.onSearch}
          value={searchInp}
        />
        <div className="home-cont">
          <input type="checkbox" className="inp-home" />
          <h1 className="head-home">Name</h1>
          <h1 className="head-home">Email</h1>
          <h1 className="head-home">Role</h1>
          <h1 className="head-home">Actions</h1>
        </div>
        <ul>
          {searchResults.map(each => (
            <About data={each} key={each.id} deleteThings={this.deleteThings} />
          ))}
        </ul>
        <div>
          <button type="button" className="delete-button">
            Delete Selected
          </button>
        </div>
      </div>
    )
  }
}

export default Home
