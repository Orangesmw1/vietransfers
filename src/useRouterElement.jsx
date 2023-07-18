import { useRoutes } from "react-router-dom"
import path from "../src/constants/path"
import MainLayout from "../src/layouts/MainLayout/MainLayout"
import Home from "../src/pages/Home/Home"

export default function useRouteElements() {
    const routeElements = useRoutes([
      {
        path: "",
        children: [
          {
            path: path.home,
            element: (
              <MainLayout >
                <Home />
              </MainLayout>
            )
          },
          
        ]
      }
    ])


    return routeElements

}
  