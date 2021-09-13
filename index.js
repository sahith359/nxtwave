import './index.css'

const About = props => {
  const {data, deleteThings} = props
  const {id, name, email, role} = data

  const onDelete = () => {
    deleteThings(id)
  }

  return (
    <li className="cont-about">
      <div className="container-about">
        <input type="checkbox" className="inp-about" />
        <p className="para-about">{name}</p>
        <p className="para-about">{email}</p>
        <p className="para-about">{role}</p>
        <button className="del-about" onClick={onDelete} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default About
