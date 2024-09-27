import { atom } from "recoil";

type LearnModalState = {
	isOpen: boolean;
	type: "goalDigger" | "victoryTracker" | "monthlyProgress";
};

const initalLearnModalState: LearnModalState = {
	isOpen: false,
	type: "monthlyProgress",
};

export const learnModalState = atom<LearnModalState>({
	key: "learnModalState",
	default: initalLearnModalState,
});
