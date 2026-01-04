# Product Requirements Document (PRD)
**Project Name:** Desert-Safari Premium Platform & Mobile App
**Target Region:** Doha, Qatar
**Version:** 1.0
**Status:** Draft / Active Development

---

## 1. Executive Summary
The platform will serve as a luxury digital concierge for desert tourism in Qatar. Unlike standard booking sites, this project prioritizes **frictionless conversion**. It recognizes that Middle Eastern markets heavily rely on conversational commerce (WhatsApp/Phone). Therefore, the UI/UX will blend traditional e-commerce (Add to Cart -> Checkout) with conversational actions ("Book via WhatsApp").

## 2. User Personas
* **The Tourist:** Wants a seamless, trustworthy experience. Likely browsing on mobile. Visual-first buyer.
* **The Local/Expat:** Wants quick weekend booking for groups. Values speed and "No hidden costs."
* **The Admin:** Needs to manage bookings coming from multiple channels (Web, WhatsApp, Phone) in one dashboard.

## 3. Functional Requirements

### A. Core User Features (Frontend)
**1. Immersive Landing Page**
* **Hero Section:** Full-screen video background (Desert dunes/Buggies) with glassmorphism overlay for the search/CTA widget.
* **Dynamic Cards:** "Bento Grid" style layout for "Safari," "ATV," and "Buggy" categories using ShadCN cards.

**2. Advanced Booking Flow (The "Omni-Book" System)**
* **Option A (Traditional):** Select Date -> Select Pax -> Add to Cart -> Stripe/QPAY Checkout.
* **Option B (Conversational):** "Book via WhatsApp" button pre-fills a WhatsApp message with tour details: *"Hi, I want to book [Tour Name] for [Date]..."*
* **Option C (AI Agent):** Floating Chatbot (AI) that can answer questions like "Is BBQ included?" and draft a booking.

**3. Authentication**
* **Clerk Auth:** Social Login (Google, Apple).
* **User Dashboard:** View past trips, download tickets (PDF), manage profile.

**4. Localization**
* **RTL Support:** Full Arabic layout support.
* **LTR Support:** English layout.
* **Currency Toggle:** Switch between QAR and USD.

### B. Admin Dashboard Features
* **Unified Inbox:** Syncs web bookings and allows simple manual entry for phone/offline bookings.
* **Fleet Management:** Track real-time availability of Buggies/ATVs (e.g., "Only 5 Raptors left for 4 PM slot").
* **Dynamic Pricing:** Ability to set price modifiers for weekends and holidays.

### C. Mobile App (React Native/Expo)
* **Native Features:** Push notifications for pickup reminders and promotions.
* **Offline Mode:** Access ticket QR codes locally without internet access (critical for deep desert areas).

## 4. Technical Architecture

### Tech Stack
* **Frontend:** React (Vite) + TypeScript + Tailwind CSS + ShadCN UI + Framer Motion.
* **Backend:** Node.js (Express) + TypeScript.
* **Database:** PostgreSQL (via Upstash/Supabase) + Prisma ORM.
* **Authentication:** Clerk.
* **Payments:**
    * **Global:** Stripe.
    * **Local (Qatar):** Fatora or QPAY integration.

### Infrastructure & Hosting
* **Frontend:** Vercel.
* **Backend:** Render.
* **Database/Redis:** Upstash.
* **Local Development:** Docker (Containerized environment).

---

## 5. Development Roadmap (Phase 1)
1.  **Setup Monorepo:** Initialize TurboRepo with Web, API, and Mobile workspaces.
2.  **Docker Config:** Setup `docker-compose.yml` for local Postgres & Redis.
3.  **Database Schema:** Define Prisma schema for Users, Tours, Bookings, and Availability.
4.  **UI Implementation:** Build the "Glassmorphism" Hero and Booking Components using ShadCN.
5.  **API Development:** Create endpoints for Tours and WhatsApp link generation.