import { hero } from "../../data/data";

export default function heros(req, res) {
  res.status(200).json(hero);
}
