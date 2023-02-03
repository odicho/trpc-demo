import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

const t = initTRPC.create();
export const appRouter = t.router({
	greeting: t.procedure
		.input(
			z.object({
				name: z.string(),
			})
		)
		.query(({ input }) => {
			return {
				greeting: `hello ${input.name}`,
			};
		}),
});
// export type definition of API
export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext: () => ({}),
});
