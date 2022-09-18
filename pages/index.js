import { List } from "../components/List"
import { MainLayout } from "../layouts"
import { generateData } from "../utils/mock"

const HomePage = () => {

  const data = generateData(50)

  return (
    <MainLayout>
      <List
        data={data}
      />
    </MainLayout>
  )
}

export default HomePage