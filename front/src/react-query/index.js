import { useQuery } from '@tanstack/react-query'
import { getCardById, getCards } from "../api";

export const useCards = (url) => {
   const { data, isLoading } = useQuery([url], getCards)
   return { data, isLoading };
};

export const useCardById = (cardId) => {
   const { data, isLoading } = useQuery([cardId], getCardById)
   return { data, isLoading };
}