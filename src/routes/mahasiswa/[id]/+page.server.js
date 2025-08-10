import { fail, redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const { id } = params;
  const mahasiswa = await prisma.mahasiswa.findUnique({
    where: { id: Number(id) },
  });
  return {
    mahasiswa: mahasiswa,
  };
}

export const actions = {
  edit: async ({ request, params }) => {
    const { id } = params;
    const formData = await request.formData();
    const name = formData.get("name");
    const jurusan = formData.get("jurusan");

    try {
      await prisma.mahasiswa.update({
        where: { id: Number(id) },
        data: { name, jurusan },
      });
    } catch (error) {
      console.error("Error updating mahasiswa:", error);
      return fail(500, "gagal updated data");
    }
    throw redirect(303, `/mahasiswa`);
  },
};
