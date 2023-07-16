
const onlyLetters = /^[A-Za-z\s]+$/;
const onlyUlrs = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|data:image\/(jpeg|png|gif|bmp|svg\+xml);base64,[A-Za-z0-9+/]+=*$/;

export default function validation (input) {

    let errors = {};

    if(!onlyLetters.test(input.name)) errors.name = "Only Letters";
    
    if((input.name).length <= 1) errors.name = "Name is Required";

    if((input.name).length > 60) errors.name = "Name Large";
    
    if(!onlyUlrs.test(input.image)) errors.image = "Url Invalid";
    
    if((input.image).length <= 1) errors.image = "Image is Required";

    if((input.summary).length <= 1) errors.summary = "Resummary is Required";

    if((input.stepByStep).length <= 1) errors.stepByStep = "Step By Step is Required";

    if(input.healthScore === "0") errors.healthScore = "Health Score Min";
    
    if(input.healthScore > 100) errors.healthScore = "Health Score Max";
    
    if((input.healthScore).length === 0) errors.healthScore = "Health Score is Required";

    return errors;
}

    //   name,
    //   image,
    //   summary,
    //   stepByStep,
    //   healthScore,
    //   diets