import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useEffect,
	useState,
} from "react";
import type { Task } from "../types";
import { lisOfTasks } from "../utils/listOfTasks";

type TasksContextType = {
	tasks: Task[];
	setTasks: Dispatch<SetStateAction<Task[]>>;
};

export const taskContext = createContext<TasksContextType | null>(null);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function TaskContextProvider({ children }: { children: any }) {
	const [tasks, setTasks] = useState<Task[]>([]);
	//let localTasks: Task[];
	useEffect(() => {
		localStorage.setItem("localTasks", JSON.stringify(tasks));
	}, [tasks]);

	useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem("localTasks") as string);
		if (tasks) {
			setTasks(tasks);
		}
	}, []);
	return (
		<taskContext.Provider value={{ tasks, setTasks }}>
			{children}
		</taskContext.Provider>
	);
}
