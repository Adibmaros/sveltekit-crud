import prisma from "$lib/prisma";

export async function load() {
  const mahasiswas = await prisma.mahasiswa.findMany();
  return {
    mahasiswa: mahasiswas,
  };
}

export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const jurusan = data.get("jurusan");

    try {
      const mahasiswa = await prisma.mahasiswa.create({
        data: {
          name,
          jurusan,
        },
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Internal Server Error" });
    }

    return {
      status: 200,
    };
  },

  hapus: async ({ url }) => {
    const id = url.searchParams.get("id");
    try {
      await prisma.mahasiswa.delete({
        where: { id: Number(id) },
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Internal Server Error" });
    }

    return {
      status: 200,
    };
  },
};
