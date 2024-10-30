import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Profil() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState(null);
 

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const profileData = { name, surname, age, phone, email };
    console.log('Kaydedilen Profil Bilgileri:', profileData);
    
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div style={styles.container}>
      <div style={styles.topSection}>
        <div style={styles.profileImageContainer}>
          <label htmlFor="profileImageInput" style={styles.imageUploadLabel}>
            <img
              src={profileImage || "https://via.placeholder.com/100"}
              alt="Profil"
              style={styles.profileImage}
            />
          </label>
          <input
            id="profileImageInput"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </div>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Çıkış
        </button>
      </div>

      <form onSubmit={handleSaveProfile} style={styles.form}>
        <h2 style={styles.header}>Profil Bilgileri</h2>

        <label style={styles.label}>E-posta</label>
        <p>{email}</p>

        <label style={styles.label}>İsim</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Soyisim</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Yaş</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Telefon Numarası</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={styles.input}
        />

        <button   type="submit" style={styles.saveButton}>Kaydet</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    padding: '20px',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0 20px',
  },
  profileImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #4CAF50',
    marginTop: '10px',
    cursor: 'pointer',
  },
  imageUploadLabel: {
    display: 'block',
    cursor: 'pointer',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  logoutButton: {
    padding: '10px',
    backgroundColor: '#FF5722',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    marginTop: '20px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  label: {
    marginBottom: '5px',
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  saveButton: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Profil;
