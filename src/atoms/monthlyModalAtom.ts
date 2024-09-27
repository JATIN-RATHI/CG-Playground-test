import { atom } from "recoil";

type MonthlyProgressModalState = {
	isOpen: boolean;
	type: "goalDigger" | "victoryTracker" | "monthlyProgress";
};

const initialMonthlyProgressModalState: MonthlyProgressModalState = {
	isOpen: false,
	type: "monthlyProgress",
};

export const monthlyProgressModalState = atom<MonthlyProgressModalState>({
	key: "monthlyProgressModalState",
	default: initialMonthlyProgressModalState,
});
