
console.log('hello')

// ```javascript
// const users = [
// {
// name: "Harry Felton",
// Teachmeskills.by
// phone": "(09) 897 33 33",
// email: "felton@gmail.com",
// animals: ["cat"],
// cars: ["bmw"],
// hasChildren: false,
// hasEducation: true
// },
// {
// name: "May Sender",
// phone": "(09) 117 33 33",
// email: "sender22@gmail.com",
// hasChildren: true,
// hasEducation: true
// },
// {
// name: "Henry Ford",
// phone": "(09) 999 93 23",
// email: "ford0@gmail.com",
// cars: ["bmw", "audi"],
// hasChildren: true,
// hasEducation: false
// }
// ]
// ```

interface User {
    name: string
    phone?: string
    email: string
    animals?: string[]
    cars?: string[]
    hasChildren: boolean
    hasEducation: boolean
  }
  
//1. Создать строку из имен пользователей через запятую
  function getUsersNames(users: User[]): string {
    return users.map(user => user.name).join(', ')
  }
//2. Подсчитать общее количество машин у пользователей
  function getTotalCars(users: User[]): number {
    return users.reduce((total, user) => total + (user.cars ? user.cars.length : 0), 0)
  }
//3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования  
  function filterByEducation(users: User[]): User[] {
    return users.filter(user => user.hasEducation)
  }
//4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных  
  function filterByAnimals(users: User[]): User[] {
    return users.filter(user => user.animals && user.animals.length > 0)
  }
//5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую  
  function getCarBrands(users: User[]): string {
    const allCars: string[] = []
    users.forEach(user => {
      if (user.cars) {
        allCars.push(...user.cars)
      }
    })
    return allCars.join(', ')
  }
  

  const users: User[] = [
    {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true
    },
    {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true
    },
    {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
    }
  ];
  

  console.log(getUsersNames(users))
  console.log(getTotalCars(users))
  console.log(filterByEducation(users))
  console.log(filterByAnimals(users))
  console.log(getCarBrands(users))