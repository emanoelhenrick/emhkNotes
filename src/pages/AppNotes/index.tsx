import { Folders } from "./components/Folders";
import { Profile } from "./components/Profile";
import { AppContainer, ButtonConfig } from "./styles";
import { NotesContextProvider } from "./context";
import { useNavigate } from "react-router-dom";


export function AppNotes({ children }: any) {

  const navigate = useNavigate()

  function goToHome() {
    navigate('/app')
  }

  return (
    <AppContainer>
      <NotesContextProvider>
      <aside>
        <div>
          <Profile />
          <Folders />
        </div>
        <ButtonConfig onClick={goToHome}>Config</ButtonConfig>
      </aside>
      {children}
      </NotesContextProvider>
    </AppContainer>
  )
}