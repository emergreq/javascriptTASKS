//     ---задача 1--- (средний балл + оценка)

function calculateGrade(students) {
  for (const person of students) {
    let sum = 0;

    for (let i = 0; i < person.scores.length; i++) {
      sum += person.scores[i];
    }

    const avg = sum / person.scores.length;
    const avg_rounded = Math.round(avg * 100) / 100;
    person.average = avg_rounded;

    if (person.average >= 90) {
      person.grade = "A";
    } else if (person.average >= 80) {
      person.grade = "B";
    } else if (person.average >= 70) {
      person.grade = "C";
    } else {
      person.grade = "F";
    }
  }

  return students;
}

//     ---задача 2--- (фильтр)

function filterProducts(products, filters) {
  let result = [];

  for (const object of products) {
    if (
      object.price <= filters.maxPrice &&
      object.category == filters.category
    ) {
      result.push(object);
    }
  }

  if (filters.maxPrice || filters.category) {
    return result;
  } else {
    return products;
  }
}
