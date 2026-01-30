
export interface Shelter {
  id: string;
  name: string;
  type: 'Protectora' | 'Santuario' | 'Centro Municipal';
  location: string;
  verified: boolean;
  dogs: number;
  cats: number;
  imageUrl: string;
  description?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ActionCard {
  title: string;
  description: string;
  icon: string;
  buttonText: string;
  variant: 'adopt' | 'volunteer' | 'donate';
}
