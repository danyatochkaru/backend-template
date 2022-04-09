import mysql2 from "mysql2";
import { database } from "../../config.json";

export default mysql2.createPool(database).promise();
