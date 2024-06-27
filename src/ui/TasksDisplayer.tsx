import { useContext, useState } from "react";
import { taskContext } from "./TaskContextProvider";
import Task from "./Task";

export default function TasksDisplayer() {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const { setTasks, tasks } = useContext(taskContext)!;
	const [inputVal, setInputval] = useState("");
	function addTask(tsk: string) {
		let nId: number;
		if (tasks.length === 0) {
			nId = 1;
		} else {
			nId = tasks.sort((a, b) => b.id - a.id)[0].id + 1;
		}
		setTasks((oldTasks) => [...oldTasks, { id: nId, title: tsk }]);
	}
	console.log(tasks);
	return (
		<div>
			<div>
				<input
					type="text"
					value={inputVal}
					onChange={(e) => setInputval(() => e.target.value)}
				/>
				<button type="button" onClick={() => addTask(inputVal)}>
					Add task
				</button>
				<h1>{inputVal}</h1>
			</div>
			{tasks.map(({ id, title, description, isDone }) => {
				return (
					<Task
						key={id}
						id={id}
						title={title}
						description={description}
						isDone={isDone}
					/>
				);
			})}
		</div>
	);
}
