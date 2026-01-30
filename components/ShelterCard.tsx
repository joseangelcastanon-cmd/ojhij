
import React from 'react';
import { Shelter } from '../types';

interface ShelterCardProps {
  shelter: Shelter;
}

const ShelterCard: React.FC<ShelterCardProps> = ({ shelter }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-all group">
      <div 
        className="h-40 bg-cover bg-center transition-transform group-hover:scale-105" 
        style={{ backgroundImage: `url("${shelter.imageUrl}")` }}
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h5 className="font-bold text-lg text-zinc-800 dark:text-white leading-tight">{shelter.name}</h5>
          {shelter.verified && (
            <span className="bg-primary/20 text-primary text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
              Verificado
            </span>
          )}
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mb-4">
          <span className="material-symbols-outlined text-sm">location_on</span> {shelter.location}
        </p>
        <div className="flex justify-between items-center border-t border-zinc-50 dark:border-zinc-800 pt-4">
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-sm font-bold">{shelter.dogs}</p>
              <p className="text-[10px] text-zinc-400 uppercase font-medium">Perros</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">{shelter.cats}</p>
              <p className="text-[10px] text-zinc-400 uppercase font-medium">Gatos</p>
            </div>
          </div>
          <button className="bg-primary/10 hover:bg-primary text-primary hover:text-[#121b0d] px-4 py-2 rounded-lg text-xs font-bold transition-all">
            Ver Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShelterCard;
