
  export function department() {
    const deptChoices = ["accounting", "sales", "production", "information technology"]
    const choiceValue = Math.floor(Math.random() * 4);
    const department = deptChoices[choiceValue]

    return department;
  };

  export function jobTitle(dept) {
    let title = "";

    switch (dept) {
      case "accounting":
        const accChoices = ["controller", "accounting manager", "accountant", "accounting clerk"]
        const accValue = Math.floor(Math.random() * 4);
        title = accChoices[accValue];
        break;
      case "sales":
        const salesChoices = ["director of sales", "sales manager", "sales associate", "brand ambassador"]
        const salesValue = Math.floor(Math.random() * 4);
        title = salesChoices[salesValue];
        break;
      case "production":
        const prodChoices = ["production manager", "project engineer", "maintenance technician", "manufacturer"]
        const prodValue = Math.floor(Math.random() * 4);
        title = prodChoices[prodValue];
        break;
      case "information technology":
        const itChoices = ["it director", "lead developer", "network technician", "junior developer"]
        const itValue = Math.floor(Math.random() * 4);
        title = itChoices[itValue];
        break;
      default:

    };
    return title;
  };
  
