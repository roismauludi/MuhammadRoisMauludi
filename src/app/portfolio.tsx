import React from 'react';

export default function Portfolio() {
  return (
    <main style={{ maxWidth: 800, margin: '40px auto', padding: 24, fontFamily: 'sans-serif', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
      <section style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <img src="/assets/img/rois.jpg" alt="Foto Profil" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e0e0e0' }} />
        <div>
          <h1 style={{ margin: 0, color: '#1976d2' }}>Muhammad Rois Mauludi</h1>
          <h2 style={{ margin: '8px 0 0 0', fontSize: 20 }}>Backend Developer</h2>
          <div style={{ marginTop: 8, fontSize: 15 }}>
            <div>📧 muhammadroismauludi@gmail.com</div>
            <div>📱 +62-812-7611-1520</div>
            <div>🐙 GitHub: <a href="https://github.com/roismauludi" target="_blank" rel="noopener noreferrer">github.com/roismauludi</a></div>
          </div>
        </div>
      </section>
      <hr style={{ margin: '32px 0' }} />
      <section>
        <h3>🧑‍💻 Tentang Saya</h3>
        <p>Saya adalah mahasiswa semester 6 di Politeknik Negeri Batam dengan fokus studi pada Teknologi Rekayasa Perangkat Lunak. Memiliki minat besar dalam pengembangan perangkat lunak, khususnya di bidang backend dan full-stack development. Terbiasa bekerja dalam tim untuk membangun berbagai sistem berbasis web dan mobile dengan menggunakan teknologi modern.</p>
      </section>
      <section>
        <h3>🛠️ Keahlian Teknis</h3>
        <ul>
          <li><b>Web & Mobile Development:</b> HTML, PHP, Laravel, Next.js, React Native, Express.js</li>
          <li><b>Database:</b> MySQL, Firebase</li>
          <li><b>Tools & Versioning:</b> GIT, GitHub</li>
          <li><b>Platform:</b> Web-based system, Mobile-based apps</li>
        </ul>
      </section>
      <section>
        <h3>🎓 Pendidikan</h3>
        <ul>
          <li><b>Politeknik Negeri Batam</b> — Teknologi Rekayasa Perangkat Lunak (2022 - Sekarang)</li>
          <li><b>SMKN 4 Tanjungpinang</b> — Rekayasa Perangkat Lunak (2019 - 2022)</li>
        </ul>
      </section>
      <section>
        <h3>💼 Pengalaman Kerja</h3>
        <b>Kementerian Agama Kabupaten Bintan</b> (2021–2022)
        <ul>
          <li>Membuat website perpustakaan</li>
          <li>Menyusun laporan perjalanan dinas</li>
        </ul>
      </section>
      <section>
        <h3>📁 Proyek yang Pernah Dikerjakan</h3>
        <ol>
          <li>
            <b>Website Perpustakaan Digital</b><br/>
            <b>Peran:</b> Full Stack Developer<br/>
            <b>Teknologi:</b> CodeIgniter, MySQL<br/>
            <b>Deskripsi:</b> Membangun sistem manajemen perpustakaan online yang memungkinkan pengguna melakukan peminjaman dan pengembalian buku secara digital.
          </li>
          <li style={{ marginTop: 12 }}>
            <b>Website Surat-Menyurat Digital</b><br/>
            <b>Peran:</b> Backend Developer<br/>
            <b>Teknologi:</b> HTML, PHP, MySQL<br/>
            <b>Deskripsi:</b> Mengembangkan sistem manajemen surat masuk/keluar untuk internal organisasi.
          </li>
          <li style={{ marginTop: 12 }}>
            <b>Website Koperasi Simpan Pinjam</b><br/>
            <b>Peran:</b> Full Stack Developer<br/>
            <b>Teknologi:</b> Laravel, MySQL<br/>
            <b>Deskripsi:</b> Sistem koperasi untuk mencatat simpanan, pinjaman, dan transaksi anggota koperasi.
          </li>
          <li style={{ marginTop: 12 }}>
            <b>Aplikasi Mobile Supply Controller</b><br/>
            <b>Peran:</b> Backend Developer<br/>
            <b>Teknologi:</b> Flutter, MySQL<br/>
            <b>Deskripsi:</b> Aplikasi mobile untuk monitoring dan pengelolaan stok barang dalam rantai pasok.
          </li>
          <li style={{ marginTop: 12 }}>
            <b>Sistem Pelatihan IoT & Pengembangan Kit</b><br/>
            <b>Peran:</b> Full Stack Developer<br/>
            <b>Teknologi:</b> Laravel, MySQL<br/>
            <b>Deskripsi:</b> Platform pelatihan berbasis web untuk pelatihan perangkat IoT dan modul pembelajaran.
          </li>
          <li style={{ marginTop: 12 }}>
            <b>Sistem Pemantauan Sampah Berbasis Komunitas</b><br/>
            <b>Peran:</b> Backend Developer<br/>
            <b>Teknologi:</b> React Native (Expo), Next.js, Firebase, Express.js<br/>
            <b>Deskripsi:</b> Aplikasi mobile dan website untuk pelaporan, pemantauan, dan pengelolaan sampah di lingkungan komunitas secara real-time.
          </li>
        </ol>
      </section>
    </main>
  );
} 