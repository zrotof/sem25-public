import { Network } from "./network";

export interface CampainTeam {
    sourceImg : string,
    name : string,
    position : string,
    networks ?: Network[]
}
