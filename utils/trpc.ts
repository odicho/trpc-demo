import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "../pages/api/trpc/[trpc]";

function getBaseUrl() {
	if (typeof window !== "undefined")
		// browser should use relative path
		return "";

	// assume localhost
	return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
	config() {
		return {
			links: [
				httpBatchLink({
					url: `${getBaseUrl()}/api/trpc`,
				}),
			],
		};
	},
});
