import { createContext, useContext, useState } from 'react';

export const PetContext = createContext();

export const usePet = () => useContext(PetContext);

export default function PetProvider({ children }) {
    const [petType, setPetType] = useState("");
    const [petName, setPetName] = useState("");
    const [petBreed, setPetBreed] = useState("");
    const [petWeight, setPetWeight] = useState("");
    const [petGender, setPetGender] = useState("");
    const [petCelebrationDay, setPetCelebrationDay] = useState("");
    const [petBirthday, setPetBirthday] = useState("");
    const [petAdoptionDate, setPetAdoptionDate] = useState("");
    const [petProfileIcon, setPetProfileIcon] = useState("");
    const [petCoverPhoto, setPetCoverPhoto] = useState("");

  return (
    <PetContext.Provider
      value={{
        petType, setPetType,
        petName, setPetName,
        petBreed, setPetBreed,
        petWeight, setPetWeight,
        petGender, setPetGender,
        petCelebrationDay, setPetCelebrationDay,
        petBirthday, setPetBirthday,
        petAdoptionDate, setPetAdoptionDate,
        petProfileIcon, setPetProfileIcon,
        petCoverPhoto, setPetCoverPhoto
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
