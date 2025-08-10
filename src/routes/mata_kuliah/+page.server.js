import prisma from "$lib/prisma";
import { fail } from "@sveltejs/kit";

export async function load() {
  const matakuliah = await prisma.matakuliah.findMany();
  return {
    matakuliah: matakuliah,
  };
}

export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const sks = data.get("sks");

    try {
      await prisma.matakuliah.create({
        data: {
          name,
          sks: parseInt(sks),
          mahasiswaId: 1,
        },
      });
    } catch (error) {
      console.error("Error adding matakuliah:", error);
      return fail(500, { message: "Error adding matakuliah" });
    }
    return {
      status: 200,
    };
  },
};
