import { useContext } from "react";
import type { Task as TaskType } from "../types";
import { taskContext } from "./TaskContextProvider";

export default function Task({
	id,
	title,
	isDone = false,
	description,
}: TaskType) {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const { setTasks, tasks } = useContext(taskContext)!;

	function removeTask(id: number) {
		const nTasks = [
			...tasks.filter((tsk) => {
				return tsk.id !== id;
			}),
		];
		setTasks(nTasks);
	}

	return (
		<div
			className="min-h-20
      p-4
      border-2
    border-blue-500
      w-80
      flex
      items-center 
      justify-stretch"
		>
			<h1 className="flex-grow">{title}</h1>
			<div>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button onClick={() => removeTask(id)}>🗑️</button>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button>✏️</button>
			</div>
		</div>
	);
}
