import React from 'react'
import UserLink from '../containers/UserLink'

const UserChanger = () => (
  <p>
    Pick a user:
    {" "}
    <UserLink user={0}>
      test
    </UserLink>
    {", "}
    <UserLink user={1}>
      joe
    </UserLink>
    {", "}
    <UserLink user={2}>
      sue
    </UserLink>
  </p>
)

export default UserChanger;