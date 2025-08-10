<script>
    const { data } = $props();
    const mahasiswa = data.mahasiswa;
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
    <div class="max-w-2xl mx-auto">
        <!-- Back Button -->
        <div class="mb-6">
            <a 
                href="/mahasiswa" 
                class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Kembali ke Daftar Mahasiswa
            </a>
        </div>

        <!-- Edit Form -->
        <div class="bg-white rounded-xl shadow-lg p-8">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-800 mb-2">Edit Data Mahasiswa</h1>
                <p class="text-gray-600">Perbarui informasi untuk <span class="font-medium text-blue-600">{mahasiswa.name}</span></p>
            </div>

            <form action="?/edit" method="post" class="space-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                        Nama Mahasiswa
                    </label>
                    <input 
                        id="name"
                        type="text" 
                        placeholder="Masukkan nama" 
                        name="name" 
                        value={mahasiswa.name}
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700"
                        required
                    />
                </div>

                <div>
                    <label for="jurusan" class="block text-sm font-medium text-gray-700 mb-2">
                        Jurusan
                    </label>
                    <input 
                        id="jurusan"
                        type="text" 
                        placeholder="Masukkan jurusan" 
                        name="jurusan" 
                        value={mahasiswa.jurusan}
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700"
                        required
                    />
                </div>

                <div class="flex space-x-4 pt-4">
                    <button 
                        type="submit"
                        class="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Simpan Perubahan</span>
                    </button>
                    
                    <a 
                        href="/mahasiswa"
                        class="flex-1 bg-gray-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-200 text-center flex items-center justify-center space-x-2"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        <span>Batal</span>
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>