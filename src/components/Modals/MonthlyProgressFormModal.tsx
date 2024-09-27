import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { monthlyProgressModalState } from "@/atoms/monthlyModalAtom";
import MonthlyProgress from "./MonthlyProgress";

type MonthlyProgressFormModalProps = {};

const MonthlyProgressFormModal: React.FC<MonthlyProgressFormModalProps> = () => {
	const closeModal = useCloseModal();

	return (
		<>
			<div
				className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'
				onClick={closeModal}
			></div>
			<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
				<div className='relative w-full h-full mx-auto flex items-center justify-center'>
					<div className='bg-blue-900 rounded-lg shadow relative w-full mx-6'>
						<div className='flex justify-end p-2'>
							<button
								type='button'
								className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
								onClick={closeModal}
							>
								<IoClose className='h-5 w-5' />
							</button>
						</div>
						<MonthlyProgress />
					</div>
				</div>
			</div>
		</>
	);
};
export default MonthlyProgressFormModal;

function useCloseModal() {
	const setMonthlyProgressModal = useSetRecoilState(monthlyProgressModalState);

	const closeModal = () => {
		setMonthlyProgressModal((prev) => ({ ...prev, isOpen: false, type: "monthlyProgress" }));
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, []);

	return closeModal;
}
