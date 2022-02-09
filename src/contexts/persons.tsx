import { createContext, ReactNode, useEffect, useState } from "react";
import { personsMock } from "../mocks/persons";
import { Person } from "../types/persons";

type personsContext = {
  persons: Person[];
  removePerson: (id: string) => void;
  addPerson: (person: Person) => void;
  updatePerson: (id: string, data: Person) => void;
}

const defaultPersonsContext: personsContext = {
  persons: [],
  removePerson: () => { },
  addPerson: () => { },
  updatePerson: () => { },
};

export const PersonsContext = createContext<personsContext>(defaultPersonsContext);

type Props = {
  children: ReactNode;
};

export function PersonsProvider({ children }: Props) {
  const [persons, setPersons] = useState<Person[]>([])

  const removePerson = (id: string) => {
    persons.splice(persons.findIndex(person => person.id === id), 1)
    setPersons([...persons])
  }

  const addPerson = (person: Person) => {
    Object.assign(person, { id: `${persons.length + 1}` })
    setPersons([...persons, person])
  }

  const updatePerson = (id: string, data: Person) => {
    const index = persons.findIndex(p => p.id === id)
    if (index !== -1) {
      Object.assign(data, { id })

      persons[index] = data
      setPersons([...persons])
    }
  }

  useEffect(() => {
    setPersons(personsMock)
  }, [])

  const value = {
    persons,
    removePerson,
    addPerson,
    updatePerson,
  }

  return (
    <PersonsContext.Provider value={value}>
      {children}
    </PersonsContext.Provider>
  );
}