
export interface Movie {
    id: number;
    name: string;
    price: number;
    rating: number;
    totalSeats: number;
    bookedSeats: string[]; 
    thumbNail: string;
    cover: string;
  }