import { Service } from "threerest";
import { Methods } from "threerest";
import { Hal } from "threerest";

import Sensor from "../models/sensor";

@Service.path("/sensors")
export default class ServiceSensors {

  constructor(db) {
    this.db = db;
  }

  @Methods.get("/")
  @Hal.halServiceMethod()
  getAll() {
    return this.db.find(null, function (err, sensors) {
      if (err) { throw err; }
      return sensors;
    });
  }

  @Methods.get("/:id")
  @Hal.halServiceMethod()
  getSensorId(value) {
    var id = value.id;
    this.db.find({"id" : id}, function (err, sensor) {
      if (err) { throw err; }
      if (!sensor) { throw new NotFoundError(); }
      return sensor;
    });
  }
}
