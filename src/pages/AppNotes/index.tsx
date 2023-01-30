import { Folders } from "./components/Folders";
import { Profile } from "./components/Profile";
import { AppContainer, ButtonConfig } from "./styles";
import { NotesContextProvider } from "./context";


export function AppNotes({ children }: any) {

  return (
    <AppContainer>
      <NotesContextProvider>
      <aside>
        <div>
          <Profile />
          <Folders />
        </div>
        <ButtonConfig>Config</ButtonConfig>
      </aside>
      {children}
      </NotesContextProvider>
    </AppContainer>
    
  )
}