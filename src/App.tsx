import Task from "./ui/Task";
import { lisOfTasks } from "./utils/listOfTasks";

function App() {
	return (
		<div className="maincontainer min-h-screen border-4 border-dotted border-black">
			<h1>Este es el agregaor de task...</h1>
			{lisOfTasks.map(({ id, description, title, isDone }) => {
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

export default App;
