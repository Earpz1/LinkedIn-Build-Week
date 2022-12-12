export const USER_SELECTED = 'USER_SELECTED'
export const USERS_LOADED = 'USERS_LOADED'

export const userSelectedAction = (users) => {
  return {
    type: USER_SELECTED,
    payload: users,
  }
}

export const usersLoaded = () => {
  return {
    type: 'USERS_LOADED',
    payload: true,
  }
}

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    console.log('We are fetching users here')
    const options = {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjBhOWM5NmRmYjAwMTUyMWE1YmMiLCJpYXQiOjE2NzA4MzYzOTMsImV4cCI6MTY3MjA0NTk5M30.tjYtW0usDncqSVyv5tqHhm6jzx297N87wMwUmb9BuAs',
      },
    }
    const fetchURL = 'https://striveschool-api.herokuapp.com/api/profile/'

    try {
      let response = await fetch(fetchURL, options)
      console.log(response)
      if (response.ok) {
        dispatch(usersLoaded())
        console.log('Fetch Successful')
        let usersData = await response.json()
        console.log(usersData)
        dispatch(userSelectedAction(usersData))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
