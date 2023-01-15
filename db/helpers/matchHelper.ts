

export const namePipe = (name: string): any => ({
    name: { $regex: ".*" + name + ".*", $options: "i" },
  });

  export const descriptionPipe = (name: string): any => ({
    description: { $regex: ".*" + name + ".*", $options: "i" },
  });

  export const ingredientsPipe = (name: string): any => ({
     ingredients: {  $elemMatch: {$regex: ".*" + name + ".*", $options: "i"} }
  });

  export const tagsPipe = (name: string): any => ({
    ingredients: { $elemMatch: {$regex: ".*" + name + ".*", $options: "i"}  }
 });




  