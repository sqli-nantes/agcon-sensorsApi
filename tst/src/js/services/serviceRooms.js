import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";

import Rooms from "../models/room";

@Service.path("/rooms")
export default class ServiceRooms {

  constructor(db) {
    this.db = db;
  }

  @Methods.get("/")
  @Hal.halServiceMethod()
  getAll() {
    return this.db.find(null, function (err, rooms) {
      if (err) { throw err; }
      return rooms;
    });
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod()
  getRoomById(value) {
    var id = value.id;
    this.db.find({"id" : id}, function (err, room) {
      if (err) { throw err; }
      if (!room) { throw new NotFoundError(); }
      return room;
    });
  }
}
