interface Person {
    name: string;
  }
  
  const guestList: Person[] = [
    { name: "Bani Fatima" },
    { name: "Humaira Shakeel"},
    { name: "Shakeel Ahmed"}
  ];
  
  function sendDinnerInvitation(person: Person): void 
  {
    console.log("Dear ${person.name},\n I would like you to come over to my place and have dinner together.");
  }
  
  guestList.forEach(sendDinnerInvitation);