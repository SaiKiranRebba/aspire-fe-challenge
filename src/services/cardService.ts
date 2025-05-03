import { Card } from "@/types/card";

export const generateRandomCard = (name: string): Card => {
  const randomNumber = `**** **** **** ${Math.floor(
    1000 + Math.random() * 9000
  )}`;
  const expiry = `${String(Math.floor(Math.random() * 12) + 1).padStart(
    2,
    "0"
  )}/${String(new Date().getFullYear() + 3).slice(-2)}`;
  return {
    id: Date.now().toString(),
    name,
    number: randomNumber,
    expiry,
    frozen: false,
    cvv: 111,
  };
};

export const loadCards = (): Card[] => {
  const stored = localStorage.getItem("cards");
  return stored ? JSON.parse(stored) : [];
};

export const saveCards = (cards: Card[]) => {
  localStorage.setItem("cards", JSON.stringify(cards));
};
