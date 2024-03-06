import { Object3D } from "three";
import { mesh } from "./mesh.ts";

const object = new Object3D();

object.add(mesh);

export default object;
export { material } from "./material.ts";
export { options } from "./options.ts";
