import styles from "@/styles/Home.module.css";
import { trpc } from "@/utils/trpc";

export default function Home() {
	const hello = trpc.greeting.useQuery({ name: "amanuel" });

	console.log(hello.data);
	return (
		<div className={styles["center-div"]}>
			{hello.data && hello.data.greeting}
		</div>
	);
}

