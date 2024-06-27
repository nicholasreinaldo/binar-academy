import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { Context } from '../context/Provider'

function Home() {
  const [allData, setallData] = useState([])
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const [files, setFiles] = useState('')
  const { nama } = useContext(Context)

  const handleChangeStatus = ({ meta, file }, status) => {
    // console.log(status, meta, file)
    if (status === 'done') {
      setFiles(meta.previewUrl)
    }
  }

  useEffect(() => {
    setfirstName('')
    setLastName('')
    setEmail('')
    setFiles('')
  }, [allData])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = { firstName, lastName, email, files }
    setallData([...allData, newData])
  }

  useEffect(() => {
    if (allData.length >= 3) {
      navigate('/to-do-list')
    }
  }, [allData])

  return (
    <div className="container-fluid p-5">
      <p>Owner: {nama}</p>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          {firstName}
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Dropzone
          // getUploadParams={() => {}}
          multiple={false}
          onChangeStatus={handleChangeStatus}
          accept="image/*,audio/*,video/*"
        />

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((el, id) => (
            <tr key={id}>
              <th scope="row">{id + 1}</th>
              <td>{el.firstName}</td>
              <td>{el.firstName}</td>
              <td>{el.email}</td>
              <td>
                <img src={el.files} width={50} height={50} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
