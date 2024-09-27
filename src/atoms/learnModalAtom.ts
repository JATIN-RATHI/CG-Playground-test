import { atom } from "recoil";

type LearnModalState = {
	isOpen: boolean;
	type: "goalDigger" | "victoryTracker" | "monthlyProgress";
};

const initalLearnModalState: LearnModalState = {
	isOpen: false,
	type: "goalDigger",
};

export const learnModalState = atom<LearnModalState>({
	key: "learnModalState",
	default: initalLearnModalState,
});
