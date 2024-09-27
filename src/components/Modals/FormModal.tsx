import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import VictoryTracker from "./VictoryTracker";
import MonthlyProgress from "./MonthlyProgress";
import Signup from "./Signup";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { learnModalState } from "@/atoms/learnModalAtom";
import GoalDigger from "./GoalDigger";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { arrayUnion, doc, runTransaction, updateDoc } from "firebase/firestore";

type FormModalProps = {};

const FormModal: React.FC<FormModalProps> = () => {
	const [user] = useAuthState(auth);
	const [updating, setUpdating] = useState(false);
	const formModal = useRecoilValue(learnModalState);
	const closeModal = useCloseModal();
	const returnUserDataAndProblemData = async (transaction: any) => {
		const userRef = doc(firestore, "users", user!.uid);
		const userDoc = await transaction.get(userRef);
		return { userDoc, userRef };
	};	
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
						{formModal.type === "goalDigger" ? <GoalDigger /> : formModal.type === "register" ? <VictoryTracker /> : <MonthlyProgress />}
					</div>
				</div>
			</div>
		</>
	);
};
export default FormModal;

function useCloseModal() {
	const setLearnModal = useSetRecoilState(learnModalState);

	const closeModal = () => {
		setLearnModal((prev) => ({ ...prev, isOpen: false, type: "goalDigger" }));
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
