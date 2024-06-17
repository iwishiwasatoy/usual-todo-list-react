import { useContext } from "react";
import { taskContext } from "./TaskContextProvider";
import Task from "./Task";

export default function TasksDisplayer() {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const { setTasks, tasks } = useContext(taskContext)!;
	return (
		<div>
			{tasks.map(({ id, description, title, isDone }) => {
				return (
					<Task
						key={id}
						id={id}
						description={description}
						title={title}
						isDone={isDone}
					/>
				);
			})}
		</div>
	);
}
