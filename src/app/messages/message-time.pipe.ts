import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'messageTime'
})
export class MessageTimePipe implements PipeTransform {

  transform(date: string): string {
    if (!date) {
      return '';
    }

    const m = moment(date);
    const now = moment();

    if (m.dayOfYear() === now.dayOfYear()) {
      return m.format('hh:mm A');
    }

    return m.format('MMM Do');
  }

}
