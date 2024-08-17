import { Conference } from "./data/conferences";

export function sortByDate(a: string, b: string) {
  return new Date(b).getTime() - new Date(a).getTime();
}

export function getConferenceTypeName(type: Conference["type"]): string {
  switch (type) {
    case "FC": {
      return "Fall Conference";
    }
    case "LR": {
      return "Leadership Retreat";
    }
    case "LS": {
      return "Leadership Summit";
    }
    case "SC": {
      return "Spring Conference";
    }
    case "MX": {
      return "MAASUx";
    }
  }
}
