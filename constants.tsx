
import React from 'react';
import { Shelter, Stat, ActionCard } from './types';

export const PROVINCES = [
  "Todas las provincias",
  "Madrid",
  "Barcelona",
  "Valencia",
  "Sevilla",
  "Zaragoza",
  "Málaga",
  "Murcia",
  "Palma",
  "Las Palmas",
  "Bilbao"
];

export const SHELTER_TYPES = [
  "Todos los tipos",
  "Protectora",
  "Santuario",
  "Centro Municipal"
];

export const STATS: Stat[] = [
  { label: "Albergues Asociados", value: "500+" },
  { label: "Mascotas en adopción", value: "12k+" },
  { label: "Adopciones logradas", value: "85k" },
  { label: "Voluntarios activos", value: "2.5k" }
];

export const FEATURED_SHELTERS: Shelter[] = [
  {
    id: '1',
    name: 'Santuario La Esperanza',
    type: 'Santuario',
    location: 'Valencia, España',
    verified: true,
    dogs: 42,
    cats: 18,
    imageUrl: 'https://picsum.photos/seed/shelter1/600/400'
  },
  {
    id: '2',
    name: 'Huellas del Camino',
    type: 'Protectora',
    location: 'Madrid, España',
    verified: true,
    dogs: 124,
    cats: 56,
    imageUrl: 'https://picsum.photos/seed/shelter2/600/400'
  }
];

export const ACTION_CARDS: ActionCard[] = [
  {
    title: "Encuentra a tu mejor amigo",
    description: "Inicia el proceso de adopción y dale un hogar a un animal que lo necesita.",
    icon: "favorite",
    buttonText: "Quiero Adoptar",
    variant: 'adopt'
  },
  {
    title: "Regala tu tiempo",
    description: "Únete como voluntario en tu albergue más cercano y marca la diferencia.",
    icon: "volunteer_activism",
    buttonText: "Hacerme Voluntario",
    variant: 'volunteer'
  },
  {
    title: "Apoya nuestra causa",
    description: "Tus donaciones ayudan a financiar comida, medicinas y mejoras en las instalaciones.",
    icon: "payments",
    buttonText: "Donar Ahora",
    variant: 'donate'
  }
];

export const Logo = ({ className = "size-10" }: { className?: string }) => (
  <div className={`text-primary flex items-center justify-center ${className}`}>
    <svg fill="none" height="100%" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10C35 10 25 22 25 35C25 45 30 55 35 60C32 65 28 75 28 85C40 85 45 80 50 72C55 80 60 85 72 85C72 75 68 65 65 60C70 55 75 45 75 35C75 22 65 10 50 10Z" fill="currentColor" fillOpacity="0.15"></path>
      <path d="M50 15C38 15 30 25 30 36C30 46 34 52 38 56C36 62 33 70 33 80C42 78 47 73 50 68C53 73 58 78 67 80C67 70 64 62 62 56C66 52 70 46 70 36C70 25 62 15 50 15Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
      <path d="M43 35C43 35 45 33 47 33" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
      <path d="M57 35C57 35 55 33 53 33" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
      <path d="M47 48C48.5 50 51.5 50 53 48" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
      <path d="M42 45L38 43" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
      <path d="M58 45L62 43" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
    </svg>
  </div>
);
