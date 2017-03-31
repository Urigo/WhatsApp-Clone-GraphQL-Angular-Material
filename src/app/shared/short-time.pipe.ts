import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'shortTime'
})
export class ShortTimePipe implements PipeTransform {

  transform(date: string): string {
    const now = moment();
    const i = moment(date);

    const compare = 'MM-DD-YYYY';

    if (now.format(compare) === i.format(compare)) {
      return i.format('h:mm A');
    } else {
      return i.format('MMM Do');
    }
  }

}
