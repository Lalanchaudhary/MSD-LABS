import React, { useState } from 'react';
import '../ComponentCss/UserProfile.css';
import { FaUserEdit, FaUsers, FaPrescriptionBottle, FaAddressBook, FaClipboardList } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Lalan Chaudhary',
    gender: 'Male',
    age: 20,
    mobileNumber: '8235570955',
    emailId: 'ChaudharyLalan28@Gmail.Com',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    // Save logic here
    console.log('Profile saved:', profile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Container className='d-flex flex-column flex-lg-row align-items-center justify-content-center'>
      <div>
        <div className="container00">
          <div className="profile-card00">
            <div className="profile-info00">
              <div className="profile-avatar00">
                <FaUserEdit size={24} />
              </div>
              <div>
                <h3>{profile.fullName}</h3>
                <p>+91 {profile.mobileNumber}</p>
              </div>
            </div>
          </div>

          <div className="details-section00">
            <h2>My Details</h2>
            <ul className="details-list00">
              <li>
                <FaUsers className="icon00" />
                <span>Family Members</span>
              </li>
              <li>
                <FaPrescriptionBottle className="icon00" />
                <span>Prescription</span>
              </li>
              <li>
                <FaAddressBook className="icon00" />
                <span>Address book</span>
              </li>
              <li>
                <FaClipboardList className="icon00" />
                <span>Bookings & Reports</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container999">
        {isEditing ? (
          <>
            <h2>Edit Profile</h2>
            <div className="form-group12">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
              />
            </div>
            <div className='form-group1234'>
              <div className="form-group12">
                <label>Gender</label>
                <select name="gender" value={profile.gender} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group12">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group12">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={profile.mobileNumber}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className="form-group12">
              <label>Email Id</label>
              <input
                type="email"
                name="emailId"
                value={profile.emailId}
                onChange={handleChange}
              />
            </div>
            <div className="button-group12">
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>My Profile</h2>
            <div className="profile-info">
              <div className="profile-group">
                <label>Name</label>
                <p>{profile.fullName}</p>
              </div>
              <div className='two-in-one'>
                <div className="profile-group">
                  <label>Gender</label>
                  <p>{profile.gender}</p>
                </div>
                <div className="profile-group">
                  <label>Age</label>
                  <p>{profile.age}</p>
                </div>
              </div>
              <div className="profile-group">
                <label>Mobile Number</label>
                <p>{profile.mobileNumber}</p>
              </div>
              <div className="profile-group">
                <label>Email Id</label>
                <p>{profile.emailId}</p>
              </div>
            </div>
            <button className="edit-button113" onClick={handleEditClick}>
              Edit Profile
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default UserProfile;
