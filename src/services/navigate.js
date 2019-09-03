import {navigate} from "svelte-routing";

export function navigateTo(path="") {
    return () => navigate("/" + path, { replace: true });
  } 