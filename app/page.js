// app/selamat-datang/page.js

'use client'; // Menandakan ini adalah Client Component

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SelamatDatang = () => {
  const router = useRouter();

  useEffect(() => {
    // Periksa apakah di klien
    if (typeof window !== 'undefined') {
      // Navigasi secara otomatis setelah 2 detik
      setTimeout(() => {
        router.push('/products');
      }, 2000); // 2 detik delay sebelum mengarahkan
    }
  }, [router]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '36px', color: '#2c3e50', fontWeight: 'bold' }}>
        Selamat Datang di Toko Kami!
      </h1>
      <p style={{ fontSize: '18px', color: '#34495e', maxWidth: '600px', margin: '20px auto' }}>
        Terima kasih telah mengunjungi toko kami. Kami dengan senang hati siap membantu Anda menemukan
        produk dan layanan terbaik yang kami tawarkan. Jelajahi kategori kami dan temukan penawaran
        menarik yang sudah kami siapkan untuk Anda!
      </p>
      <div style={{ marginTop: '40px', color: '#8e44ad', fontSize: '20px' }}>
        <p>
          Anda akan segera diarahkan ke halaman produk dalam beberapa detik...
        </p>
        <div
          style={{
            border: '4px solid #8e44ad',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            margin: '0 auto',
            animation: 'spin 2s infinite linear',
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SelamatDatang;
