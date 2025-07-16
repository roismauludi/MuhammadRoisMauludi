import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-60 blur-2xl" />
      {/* Header Sticky */}
      {/* Wave SVG Background */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-40">
          <path fill="url(#waveGradient)" fillOpacity="0.5" d="M0,80 C360,180 1080,0 1440,100 L1440,0 L0,0 Z" />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7F7FD5" />
              <stop offset="0.5" stopColor="#86A8E7" />
              <stop offset="1" stopColor="#91EAE4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <header className="sticky top-0 z-20 bg-white shadow-md w-full py-4 mb-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center relative">
          {/* Gradient Blur Background Behind Profile */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-60 h-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-40 blur-2xl rounded-full -z-10" />
          <img src="/assets/img/rois.jpg" alt="Foto Profil" className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-2xl mb-3 transition-transform duration-300 hover:scale-105" />
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 text-center">Muhammad Rois Mauludi</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-600 text-center mt-1">Backend Developer</h2>
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-2 text-gray-700 text-base">
            <div className="flex items-center gap-1"><span className="text-blue-600">📧</span> muhammadroismauludi@gmail.com</div>
            <div className="flex items-center gap-1"><span className="text-blue-600">📱</span> <a href="https://wa.me/6281276111520" target="_blank" rel="noopener noreferrer" className="text-green-600 underline hover:text-green-700">Whatsapp</a></div>
            <div className="flex items-center gap-1"><span className="text-blue-600">🐙</span> <a href="https://github.com/roismauludi" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">GitHub</a></div>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 pb-12">
        {/* Tentang Saya */}
        <section className="bg-white rounded-xl shadow p-6 mb-7">
          <h3 className="text-xl font-bold text-blue-700 flex items-center gap-2 mb-2">🧑‍💻 Tentang Saya</h3>
          <p className="text-gray-800 text-base leading-relaxed">Saya adalah mahasiswa semester 6 di Politeknik Negeri Batam dengan fokus studi pada Teknologi Rekayasa Perangkat Lunak. Memiliki minat besar dalam pengembangan perangkat lunak, khususnya di bidang backend dan full-stack development. Terbiasa bekerja dalam tim untuk membangun berbagai sistem berbasis web dan mobile dengan menggunakan teknologi modern.</p>
        </section>
        {/* Keahlian Teknis */}
        <section className="bg-white rounded-xl shadow p-6 mb-7">
          <h3 className="text-xl font-bold text-blue-700 flex items-center gap-2 mb-2">🛠️ Keahlian Teknis</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li><span className="font-semibold">Web &amp; Mobile Development:</span> HTML, PHP, Laravel, Next.js, React Native, Express.js</li>
            <li><span className="font-semibold">Database:</span> MySQL, Firebase</li>
            <li><span className="font-semibold">Tools &amp; Versioning:</span> GIT, GitHub</li>
            <li><span className="font-semibold">Platform:</span> Web-based system, Mobile-based apps</li>
          </ul>
        </section>
        {/* Pendidikan */}
        <section className="bg-white rounded-xl shadow p-6 mb-7">
          <h3 className="text-xl font-bold text-blue-700 flex items-center gap-2 mb-2">🎓 Pendidikan</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li><span className="font-semibold">Politeknik Negeri Batam</span> — Teknologi Rekayasa Perangkat Lunak (2022 - Sekarang)</li>
            <li><span className="font-semibold">SMKN 4 Tanjungpinang</span> — Rekayasa Perangkat Lunak (2019 - 2022)</li>
          </ul>
        </section>
        {/* Pengalaman Kerja */}
        <section className="bg-white rounded-xl shadow p-6 mb-7">
          <h3 className="text-xl font-bold text-blue-700 flex items-center gap-2 mb-2">💼 Pengalaman Kerja</h3>
          <div className="font-semibold text-gray-800 mb-1">Kementerian Agama Kabupaten Bintan <span className="font-normal">(2021–2022)</span></div>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            <li>Membuat website perpustakaan</li>
            <li>Menyusun laporan perjalanan dinas</li>
          </ul>
        </section>
        {/* Proyek */}
        <section className="mb-7">
          <div className="inline-block px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm mb-4">
            <h3 className="text-xl font-bold text-white drop-shadow-lg flex items-center gap-2">📁 Proyek yang Pernah Dikerjakan</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card Proyek */}
            <div className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-600 transition-transform hover:scale-[1.025] hover:shadow-lg duration-150">
              <div className="font-bold text-blue-900 text-base mb-1">Website Perpustakaan Digital</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Peran:</span> Full Stack Developer</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Teknologi:</span> CodeIgniter, MySQL</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Deskripsi:</span> Membangun sistem manajemen perpustakaan online yang memungkinkan pengguna melakukan peminjaman dan pengembalian buku secara digital.</div>
            </div>
            <div className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-600 transition-transform hover:scale-[1.025] hover:shadow-lg duration-150">
              <div className="font-bold text-blue-900 text-base mb-1">Website Surat-Menyurat Digital</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Peran:</span> Backend Developer</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Teknologi:</span> HTML, PHP, MySQL</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Deskripsi:</span> Mengembangkan sistem manajemen surat masuk/keluar untuk internal organisasi.</div>
            </div>
            <div className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-600 transition-transform hover:scale-[1.025] hover:shadow-lg duration-150">
              <div className="font-bold text-blue-900 text-base mb-1">Website Koperasi Simpan Pinjam</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Peran:</span> Full Stack Developer</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Teknologi:</span> Laravel, MySQL</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Deskripsi:</span> Sistem koperasi untuk mencatat simpanan, pinjaman, dan transaksi anggota koperasi.</div>
            </div>
            <div className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-600 transition-transform hover:scale-[1.025] hover:shadow-lg duration-150">
              <div className="font-bold text-blue-900 text-base mb-1">Aplikasi Mobile Supply Controller</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Peran:</span> Backend Developer</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Teknologi:</span> Flutter, MySQL</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Deskripsi:</span> Aplikasi mobile untuk monitoring dan pengelolaan stok barang dalam rantai pasok.</div>
            </div>
            <div className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-600 transition-transform hover:scale-[1.025] hover:shadow-lg duration-150">
              <div className="font-bold text-blue-900 text-base mb-1">Sistem Pelatihan IoT &amp; Pengembangan Kit</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Peran:</span> Full Stack Developer</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Teknologi:</span> Laravel, MySQL</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Deskripsi:</span> Platform pelatihan berbasis web untuk pelatihan perangkat IoT dan modul pembelajaran.</div>
            </div>
            <div className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-600 transition-transform hover:scale-[1.025] hover:shadow-lg duration-150">
              <div className="font-bold text-blue-900 text-base mb-1">Sistem Pemantauan Sampah Berbasis Komunitas</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Peran:</span> Backend Developer</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Teknologi:</span> React Native (Expo), Next.js, Firebase, Express.js</div>
              <div className="text-gray-800"><span className="font-semibold text-blue-700">Deskripsi:</span> Aplikasi mobile dan website untuk pelaporan, pemantauan, dan pengelolaan sampah di lingkungan komunitas secara real-time.</div>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center text-gray-500 text-sm py-6">&copy; {new Date().getFullYear()} Muhammad Rois Mauludi</footer>
    </div>
  );
}
