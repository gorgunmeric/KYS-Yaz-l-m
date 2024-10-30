import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (email === "husrevoglu61@gmail.com" && password === "123456") {
        navigate('/profil', { state: { email } });
      } else {
        alert("Hatalı giriş bilgileri.");
      }
    };
//     try {
//       const response = await fetch('https://test-jokercrm.rteca.com/api/v1/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
       
//       if (response.ok) {
//         const responseData = await response.json();
//         localStorage.setItem('user', JSON.stringify(responseData.user)); 
//         localStorage.setItem('token', responseData.token);
//         navigate('/profil'); 
//       } else {
//         console.log('Giriş başarısız');
//       }
//     } catch (error) {
//       console.error('Hata:', error);
//     }
//   };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.header}>Üye Girişi</h2>
        
        <label style={styles.label}>E-posta</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Şifre</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        
        <button type="submit" style={styles.button}>Giriş Yap</button>
        
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20230523/pngtree-full-space-wallpapers-widescreen-image_2673682.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',   
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
  },
  label: {
    marginBottom: '5px',
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default Login;
