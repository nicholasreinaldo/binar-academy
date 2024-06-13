import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const fetchProfiles = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=10')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error(error)
    return []
  }
}

function App() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const getProfiles = async () => {
      const fetchedProfiles = await fetchProfiles()
      setProfiles(fetchedProfiles)
    }

    getProfiles()
  }, [])

  return (
    <div className="container">
      <h1 className="text-center my-4">User Profiles</h1>
      <div className="row">
        {profiles.map((profile, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={profile.picture.medium}
                className="card-img-top"
                alt={`${profile.name.first} ${profile.name.last}`}
              />
              <div className="card-body">
                <h2 className="card-title">{`${profile.name.first} ${profile.name.last}`}</h2>
                <p className="card-text">Gender: {profile.gender}</p>
                <p className="card-text">Email: {profile.email}</p>
                <p className="card-text">
                  Location:{' '}
                  {`${profile.location.city}, ${profile.location.state}, ${profile.location.country}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
