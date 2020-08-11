import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Types } from '../types.ts';
import { DinosaurValidation } from '../Validation/dinosaurValidation.ts'

let dinosaurs: Types.Dinosaur = [
  {
    id: 1,
    name: "Tyrannosaurus Rex",
    description: "This is Tyrannosaurus Rex",
    type: 1,
  }
];

export const getDinosaurs = ({ response }: { response: any }) => {
  return DinosaurValidation.isValid(dinosaurs).then(function(result) {
    try {
        if (result.passes) {
          response.body = {
            success: true,
            data: [ result.errors ]
          } 
        } else {
          response.body = {
            success: false,
            data: [ result.errors ]
          } 
        }
      } catch (ex) {
        console.log(ex as string);
      }
    });
}
