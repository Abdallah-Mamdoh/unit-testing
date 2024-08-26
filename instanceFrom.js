
import {expect} from '@jest/globals';

export function instanceFrom (instance,className){

    if (instance instanceof className) {
        return {
            message: () =>
              `expected to be instance from this class`,
            pass: true,
          };
      } else {
        return {
            message: () =>
              `expected not to be instance from this class`,
            pass: false,
          }
      }
}

 

expect.extend({
    instanceFrom,
  });
  