import { CountdownList } from "@components/CountdownList";
import { AddModal } from "@components/AddModal";
import { ToggleTheme } from "@components/ToggleTheme";

export default function Home() {
  return (
    <>
      <div className="bg-neutral-200 dark:bg-neutral-900 min-h-screen">
        <div className="container mx-auto px-2">
          <ToggleTheme />
          <CountdownList />
          <AddModal />
        </div>
      </div>
    </>
  )
}