import { Folders } from "./components/Folders";
import { Profile } from "./components/Profile";
import { AppContainer, ButtonConfig } from "./styles";

export function AppNotes({ children }: any) {
  return (
    <AppContainer>
      <aside>
        <div>
          <Profile />
          <Folders />
        </div>
        <ButtonConfig>Config</ButtonConfig>
      </aside>
      {children}
    </AppContainer>
    
  )
}