
const imageRegex = /\.(jpeg|jpg|gif|png|bmp|svg)$/i;

const onlyNumber = /^[0-9]+$/; 


export default function validation (input) {
    let errors = {};
    if((input.name).length <= 1) errors.name = "Name is Required";

    if((input.name).length > 60) errors.name = "Name Large";

    if(!imageRegex.test(input.image)) errors.image = "Required Url From Image";
    
    if((input.image).length < 2) errors.image = "Image is Required";

    if((input.summary).length < 2) errors.summary = "Resummary is Required";

    if((input.stepByStep).length < 2) errors.stepByStep = "Step By Step is Required";

    if((input.healthScore).length === 0) errors.healthScore = "Health Score is Required";

    if(input.healthScore > 100) errors.healthScore = "Health Score Max";
    
    if(!onlyNumber.test(input.healthScore)) errors.healthScore = "Health Score is Only Number";

    if(input.diets === "Diets") errors.diets = "Diets is Reqired";

    return errors;
}

    //   name,
    //   image,
    //   summary,
    //   stepByStep,
    //   healthScore,
    //   diets