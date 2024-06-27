import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useEffect,
	useState,
} from "react";
import type { Task } from "../types";
// import { lisOfTasks } from "../utils/listOfTasks";

type TasksContextType = {
	tasks: Task[];
	setTasks: Dispatch<SetStateAction<Task[]>>;
};

export const taskContext = createContext<TasksContextType | null>(null);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function TaskContextProvider({ children }: { children: any }) {
	const lTask: Task[] =
		JSON.parse(localStorage.getItem("lTasks") as string) ?? [];

	const [tasks, setTasks] = useState<Task[]>(lTask);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (lTask) {
			setTasks([...lTask]);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("lTasks", JSON.stringify(tasks));
	}, [tasks]);

	return (
		<taskContext.Provider value={{ tasks, setTasks }}>
			{children}
		</taskContext.Provider>
	);
}
