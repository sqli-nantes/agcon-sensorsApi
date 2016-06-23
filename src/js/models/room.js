import { Hal } from "threerest";

@Hal.halEntity("/rooms/:id")
export default class Room {

  @Hal.resourceId()
  id = 0;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
