import { getCustomerLogos } from "@/content/queries"
import Clients from "./clients"

const LogoWall = async () => {
  const data = await getCustomerLogos()

  return <Clients logos={data.assetCollection.items} />
}
export default LogoWall
