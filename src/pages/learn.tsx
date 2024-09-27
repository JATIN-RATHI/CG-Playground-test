import { learnModalState } from "@/atoms/learnModalAtom";
import { victoryModalState } from "@/atoms/victoryModalAtom";
import { monthlyProgressModalState } from "@/atoms/monthlyModalAtom";
import FormModal from "@/components/Modals/FormModal";
import VictoryFormModal from "@/components/Modals/VictoryFormModal";
import Link from "next/link";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import MonthlyProgressFormModal from "@/components/Modals/MonthlyProgressFormModal";

export default function Learn() {
    const [open, setOpen] = React.useState(false);
    const setLearnModalChange = useSetRecoilState(learnModalState);
    const setVictoryModal = useSetRecoilState(victoryModalState);
    const setMonthlyProgressModal = useSetRecoilState(monthlyProgressModalState);
    const monthlyProgressModal = useRecoilValue(monthlyProgressModalState);
    const victoryModal = useRecoilValue(victoryModalState);
    const learnModal = useRecoilValue(learnModalState);
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };
    return ( <div className='bg-dark-layer-2 min-h-screen text-yellow-400 text-center'>
                <div className="text-4xl p-3"></div>
                {/* <div className="text-4xl p-3">Learnings</div> */}
                <div    className="max-w-screen-xl mx-auto">
                    <div className="m-auto mb-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Goal Digger</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pick a superpower to master this month.</p>
                        <a onClick={() => setLearnModalChange((prev) => ({ ...prev, isOpen: true, type: "goalDigger" }))} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add &nbsp;
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        {learnModal.isOpen && <FormModal />}
                    </div>
                    <div className="m-auto mb-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Victory Tracker</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Update your todays progress.</p>
                        <a onClick={() => setVictoryModal((prev) => ({ ...prev, isOpen: true, type: "victoryTracker" }))} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add &nbsp;
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        {victoryModal.isOpen && <VictoryFormModal />}
                    </div>
                    <div className="m-auto mb-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Monthly Progress</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Add your monthly progress and update your skills. {"(What you've learnt this month)"}</p>
                        <a onClick={() => setMonthlyProgressModal((prev) => ({ ...prev, isOpen: true, type: "monthlyProgress" }))} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add &nbsp;
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        {monthlyProgressModal.isOpen && <MonthlyProgressFormModal />}
                    </div>
                    <div>
					<Link href="/">
						<img src="/homeBtn.webp" alt="Home" className="max-w-[5%] fixed right-20 bottom-10"/>
					</Link>
				</div>
                </div>
    </ div>)
}