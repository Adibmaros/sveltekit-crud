import prisma from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const { id } = params;
  const matakuliah = await prisma.matakuliah.findUnique({
    where: {
      id: Number(id),
    },
  });
  return {
    matakuliah: matakuliah,
  };
}

export const actions = {
  edit: async ({ url, request }) => {
    const id = url.searchParams.get("id");
    const formData = await request.formData();
    const name = formData.get("name");
    const sks = formData.get("sks");

    try {
      await prisma.matakuliah.update({
        where: { id: Number(id) },
        data: { name, sks: Number(sks), mahasiswaId: 1 },
      });
    } catch (error) {
      console.error("Error updating matakuliah:", error);
      return fail(500, { message: "Failed to update matakuliah" });
    }
    throw redirect(303, "/mata_kuliah");
  },
};
