import type { Task as TaskType } from "../types";

export default function Task({
	id,
	title,
	isDone = false,
	description,
}: TaskType) {

  


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
				<button>🗑️</button>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button>✏️</button>
			</div>
		</div>
	);
}
