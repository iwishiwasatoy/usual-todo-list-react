import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useState,
} from "react";
import type { Task } from "../types";
import { lisOfTasks } from "../utils/listOfTasks";

type TasksContextType = {
	tasks: Task[];
	setTasks: Dispatch<SetStateAction<Task[]>>;
};

const taskContext = createContext<TasksContextType | null>(null);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function TasksContext({ children }: { children: any }) {
	const [tasks, setTasks] = useState<Task[]>(lisOfTasks);
	return (
		<taskContext.Provider value={{ tasks, setTasks }}>
			{children}
		</taskContext.Provider>
	);
}
