import prisma from "$lib/prisma";

// Handler SvelteKit, tidak perlu Auth.js di sini
export const handle = async ({ event, resolve }) => {
  return await resolve(event);
};
