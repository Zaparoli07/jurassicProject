import { validate, required, isNumber } from "https://deno.land/x/validasaur/mod.ts";

export module DinosaurValidation {
  export async function isValid(inputs: any) {
    
    const [ passes, errors ] = await validate(inputs, {
      id: [required, isNumber],
      name: required,
      type: [required, isNumber]
    });
    
    return { passes, errors };
  }
}

