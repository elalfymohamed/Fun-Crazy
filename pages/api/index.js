import { global } from "../../data/data";

export default function globals(req, res) {
  res.status(200).json(global);
}
