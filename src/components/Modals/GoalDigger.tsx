import { auth, firestore } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { arrayUnion, doc, runTransaction, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import router from "next/router";

type GoalDiggerProps = {};

const GoalDigger: React.FC<GoalDiggerProps> = () => {
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
        if(user == null)
		{
			toast.error("You must be logged in to submit form.", { position: "top-left", theme: "dark" });
			return;
		}
        if (!inputs.name || !inputs.skillToLearn || !inputs.timeRequired || !inputs.reasonToPursue) return alert('Please fill all fields');
        try{
            // const dateWiseFormArray = {
            //     submittedAt : Date.now()
            // }
            // await setDoc(doc (firestore, "users", user!.uid),  dateWiseFormArray);
			const userRef = doc(firestore, "users", user!.uid);
            const newFormData = {
                name: inputs.name,
                skillToLearn: inputs.skillToLearn,
                timeRequired: inputs.timeRequired,
                reasonToPursue: inputs.reasonToPursue,
                submittedAt : new Date()
            };
            await updateDoc(userRef, {
                goalDigger: arrayUnion(newFormData)
            }).then(function(){
                toast.success("Successfully Submitted form!");
                setTimeout(function(){ location.reload(); }, 3000);
            });
            
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
			<h3 className='text-xl font-medium text-white'>Goal Digger Form</h3>
			<div>
				<input
                    onChange={handleChangeInput}
					type='name'
					name='name'
					id='name'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='Full Name'
				/>
			</div>
			<div>
				<input
                    onChange={handleChangeInput}
					type='skillToLearn'
					name='skillToLearn'
					id='skillToLearn'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='Skill to learn'
				/>
			</div>
			<div>
				<input
                    onChange={handleChangeInput}
					type='timeRequired'
					name='timeRequired'
					id='timeRequired'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='Time Required'
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
export default GoalDigger;
