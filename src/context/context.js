import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()

//Provide, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  //request loading
  const [requests, setRequests] = useState(0)
  const [loading, setIsLoading] = useState(false)

  //eror
  const [error, setError] = useState({ show: false, msg: '' })

  const searchGithubUser = async (user) => {
    // console.log(user)
    toggleError()
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err))
    // console.log(response)
    if (response) {
      setGithubUser(response.data)
      //more logic here
    } else {
      toggleError(true, 'no user with that name')
    }
  }

  //check rate
  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        // console.log(data)
        let {
          rate: { remaining },
        } = data
        // remaining = 0
        setRequests(remaining) //gdy 0 button sie nie pojawia w szukajce
        if (remaining === 0) {
          toggleError(true, 'exceeded')
        }
      })
      .then((err) => {
        // console.log(err)
      })
  }

  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }
  //error
  useEffect(() => {
    checkRequest()
    // console.log('effect')
  }, [])
  return <GithubContext.Provider value={{ githubUser, repos, followers, requests, error, searchGithubUser }}>{children}</GithubContext.Provider>
}

export { GithubContext, GithubProvider }
