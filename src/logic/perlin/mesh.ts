import { IcosahedronGeometry, PlaneGeometry, Points } from "three";
import { material } from "./material.ts";

const [meshSize, meshDetail] = [20, 100]

const geometry = new PlaneGeometry(meshSize, meshSize, meshDetail, meshDetail);
export const mesh = new Points(geometry, material);
