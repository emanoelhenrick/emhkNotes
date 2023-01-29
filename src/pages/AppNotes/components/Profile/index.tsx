import { Avatar, ProfileContainer } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://avatars.githubusercontent.com/u/110049976?v=4" />
      <span>Username</span>
      <div></div>
    </ProfileContainer>
  )
}