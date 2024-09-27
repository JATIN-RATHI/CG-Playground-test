import { atom } from "recoil";

type VictoryModalState = {
	isOpen: boolean;
	type: "goalDigger" | "victoryTracker" | "monthlyProgress";
};

const initialVictoryModalState: VictoryModalState = {
	isOpen: false,
	type: "victoryTracker",
};

export const victoryModalState = atom<VictoryModalState>({
	key: "victoryModalState",
	default: initialVictoryModalState,
});
