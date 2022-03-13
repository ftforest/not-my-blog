import { Posts } from "./Posts/Posts";
import { SideBar } from "./SideBar/SideBar";

import './MainBlock.css'

export const MainBlock = ({ setIsLoggedIn }) => {
  return (
    <>
      <SideBar setIsLoggedIn={setIsLoggedIn} />
      <main className="mainBlock">
        <Posts />
      </main>
    </>
  )
}