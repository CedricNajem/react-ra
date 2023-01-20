import recharts from "recharts";
import { PieChart, Pie, Cell, Sector } from "recharts";

import users from "./uvs.json";
import users from "./ca.json";

const dataUV = [
  { date: "2022-01-01", uv: 4000 },
  { date: "2022-02-01", uv: 3000 },
  { date: "2022-01-01", uv: 2680 },
  { date: "2022-01-01", uv: 5000 },
  { date: "2022-01-01", uv: 7904 },
];

const dataSector = [
  { sector: "info", ca: 4000000 },
  { sector: "automobile", ca: 2560850 },
  { sector: "immobilier", ca: 3459090 },
  { sector: "energie", ca: 16897350 },
  { sector: "administratif", ca: 120459 },
];
