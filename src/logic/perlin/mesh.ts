import { IcosahedronGeometry, Points } from "three";
import { material } from "./material.ts";

const geometry = new IcosahedronGeometry(3, 10);
export const mesh = new Points(geometry, material);
