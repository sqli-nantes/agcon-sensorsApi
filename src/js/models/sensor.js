import { Hal } from "threerest";

@Hal.halEntity("/sensors/:id")
export default class Sensor {

  @Hal.resourceId()
  id = 0;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
