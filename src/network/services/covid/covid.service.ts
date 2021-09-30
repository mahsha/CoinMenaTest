import http from "@coin-mena/network/http-common"
import { ISummery } from "./covid.service.types"

class CovidDataService {
  public getSummary() {
    return http.get<ISummery>("/summary")
  }
}

export default new CovidDataService()
