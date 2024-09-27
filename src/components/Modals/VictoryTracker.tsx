import { auth, firestore } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { arrayUnion, doc, runTransaction, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import router from "next/router";

type VictoryTrackerProps = {};

const VictoryTracker: React.FC<VictoryTrackerProps> = () => {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	const todayDate = mm + '/' + dd + '/' + yyyy;

    const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);	const [user] = useAuthState(auth);
    const [updating, setUpdating] = useState(false);
    const [inputs, setInputs] = useState({ name: "", skillToLearn: "",  timeRequired: "", reasonToPursue: ""});
	const returnUserData = async (transaction: any) => {
		const userRef = doc(firestore, "users", user!.uid);
		const userDoc = await transaction.get(userRef);        
		return { userDoc, userRef };
	};	
    const handleSubmitGoalDigger = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userRef = doc(firestore, "users", user!.uid);
        if (!inputs.name || !inputs.skillToLearn || !inputs.timeRequired || !inputs.reasonToPursue) return alert(inputs.name);
        try{
            if (!user) {
                toast.error("You must be logged in to submit form.", { position: "top-left", theme: "dark" });
                return;
            }
            // const dateWiseFormArray = {
            //     submittedAt : Date.now()
            // }
            // await setDoc(doc (firestore, "users", user!.uid),  dateWiseFormArray);
            const newFormData = {
                name: inputs.name,
                skillToLearn: inputs.skillToLearn,
                timeRequired: inputs.timeRequired,
                reasonToPursue: inputs.reasonToPursue
            }
            await updateDoc(userRef, {
                goalDigger: arrayUnion(newFormData)
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

	const handleSubmit = async () => {
        if (!inputs.name || !inputs.skillToLearn || !inputs.timeRequired || !inputs.reasonToPursue) return alert("Please fill all fields");
        console.log('handle submit');
		if (!user) {
			toast.error("You must be logged in to submit form.", { position: "top-left", theme: "dark" });
			return;
		}
		if (updating) return;
		setUpdating(true);
		await runTransaction(firestore, async (transaction) => {
			const { userDoc, userRef } = await returnUserData(transaction);
            if (!userDoc.exists()) {
                throw "Document does not exist!";
              }

		});
		setUpdating(false);
	}; 

	
	useEffect(() => {
		if (error) alert(error);
	}, [error]);

	return (
		<form className='space-y-6 px-6 pb-4' onSubmit={handleSubmitGoalDigger}>
			<h3 className='text-xl font-medium text-white'>Victory Tracker Form</h3>
			<div>
				<p>Date</p>
				<input
                    onChange={handleChangeInput}
					type='date'
					name='date'
					id='date'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder={todayDate}
				/>
			</div>
			<div>
				<p>Today`s Status</p>
				<input
                    onChange={handleChangeInput}
					type='statusUpdate'
					name='statusUpdate'
					id='statusUpdate'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='I created navbar and login modal today.'
				/>
			</div>
			<div>
				<p>No. of hours</p>
				<input
                    onChange={handleChangeInput}
					type='noOfHours'
					name='noOfHours'
					id='noOfHours'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='2 hours spent on navbar and 3 hours spent on modal'
				/>
			</div>
            <div>
				<input
                    onChange={handleChangeInput}
					type='reasonToPursue'
					name='reasonToPursue'
					id='reasonToPursue'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='Why Do you want to pursue?'
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
export default VictoryTracker;
