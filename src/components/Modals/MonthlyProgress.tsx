import { auth, firestore } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import router from "next/router";

type MonthlyProgressProps = {};

const MonthlyProgress: React.FC<MonthlyProgressProps> = () => {
    const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);	const [user] = useAuthState(auth);
    const [inputs, setInputs] = useState({ skillsAcquired: "", onGoingTasks: "",  submittedAt: ""});
	const returnUserData = async (transaction: any) => {
		const userRef = doc(firestore, "users", user!.uid);
		const userDoc = await transaction.get(userRef);        
		return { userDoc, userRef };
	};	
    const handleSubmitMonthlyProgress = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user==null) {
			toast.error("You must be logged in to submit form.", { position: "top-left", theme: "dark" });
			return;
		}
        if (!inputs.skillsAcquired || !inputs.onGoingTasks || !inputs.submittedAt ) return alert('Please fill all fields');
        try{            
            // const dateWiseFormArray = {
            //     submittedAt : Date.now()
            // }
            // await setDoc(doc (firestore, "users", user!.uid),  dateWiseFormArray);
			const userRef = doc(firestore, "users", user!.uid);
            const newFormData = {
                name: inputs.skillsAcquired,
                onGoingTasks: inputs.onGoingTasks,
				submittedAt : Date.now()
            }
            await updateDoc(userRef, {
                monthlyProgress: arrayUnion(newFormData)
            })
            router.push("/learn");
        }catch (error: any) {
			toast.error(error.message, { position: "top-center" });
		} finally {
			toast.dismiss("loadingToast");
		}
    }
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	
	useEffect(() => {
		if (error) alert(error);
	}, [error]);

	return (
		<form className='space-y-6 px-6 pb-4' onSubmit={handleSubmitMonthlyProgress}>
			<h3 className='text-xl font-medium text-white'>Monthly Progress Form</h3>
			<div>
				<input
                    onChange={handleChangeInput}
					type='skillsAcquired'
					name='skillsAcquired'
					id='skillsAcquired'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='Skills Acquired'
				/>
			</div>
            <div>
				<input
                    onChange={handleChangeInput}
					type='onGoingTasks'
					name='onGoingTasks'
					id='onGoingTasks'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder=' Ongoing tasks'
				/>
			</div>

			<button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        '
			>
				{loading ? "Submittng..." : "Submit"}
			</button>
		</form>
	);
};
export default MonthlyProgress;
