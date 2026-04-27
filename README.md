# 🌍 IllinTir — Restoring Missing Lives Through Technology

> A secure, community-powered platform for reporting, tracking, and reconnecting missing persons across Somalia and beyond.

IllinTir is not just a project — it is a **digital humanitarian system** designed to help families find missing loved ones using technology, structured data, and community collaboration.

We believe that:
> Every missing person deserves a searchable identity in the digital world.


## 🧩 Problem

Many missing person cases in Somalia are undocumented, disorganized, and hard to track.

## 💡 Solution

ILLINTIRE provides a centralized system where:

- Users can report missing persons
  
- Families can search and track cases
  
- Authorities can manage and verify information


## 🚀 Core Features

- 📢 Report missing persons with structured data
  
- 🔍 Advanced search & filtering system
  
- 🧾 Verified reporting system (to prevent fake entries)
  
- 📍 Location-based tracking support
  
- 🖼️ Image upload & recognition-ready structure

- 🔐 Secure authentication (JWT + Role-based access)

- 🛡️ Admin moderation dashboard


## 🧱 System Design Philosophy

IllinTir is built like a **real-world civic-tech platform**:

- Scalable API-first architecture

- Secure-by-default design

- Modular backend structure

- Future AI integration ready (face recognition, matching system)

## 🔐 Security Focus

Because this system handles sensitive human data:

- Data validation on every request

- Rate limiting to prevent abuse

- Role-based access control

- Encrypted sensitive fields

- Audit logs for admin

  
 ## 🏗️ Tech Stack

 
- Frontend: React.js
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT
- REST API Architecture
  

## 📡 API Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/reports | Create missing person report |
| GET | /api/reports | Get all reports |
| GET | /api/reports/:id | Get single report |
| PATCH | /api/reports/:id | Update report |
| DELETE | /api/reports/:id | Delete report |


## 📦 Installation
- git clone     https://github.com/AishaKeyf/Illin_tir
- cd Illin_tir
- npm install
- npm run dev


 ## 🧭 Future Roadmap

- 🤖 AI-powered face matching system
  
- 📱 Mobile app (React Native)
  
- 🌍 Multi-language support (Somali, English, Arabic)
  
- 📊 Analytics dashboard for authorities
  
- 🔔 Real-time alerts system

  
## ⚠️ Disclaimer

This system must be used ethically and responsibly. Misuse or fake reporting is strictly prohibited.



## 🌟 Vision

To become the leading missing persons platform in Somalia and beyond.



## 👩‍💻 Author

Built by @AishaKeyf, a developer passionate about **humanitarian tech + backend systems + real-world impact.**
