import { onMount } from "solid-js";
import { Example } from "~/logic/rendering.ts";

export default function Canvas() {
  let container: HTMLDivElement;

  onMount(() => {
    const e = new Example(container);
  });

  return <div ref={container!} class="absolute top-0 left-0"></div>;
}
