import { RecoilState } from "recoil";

export interface CardStatePropTypes {
    matched: boolean;
    pair: number;
    id: number;
    icon: string;
    flipped: boolean;
}