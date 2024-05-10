import { getContentForLogoWall } from "@/content/queries"
import Clients from "./clients"

const LogoWall = async () => {
  const data = await getContentForLogoWall()
  return <Clients content={data.assetCollection.items} />
}

export default LogoWall
