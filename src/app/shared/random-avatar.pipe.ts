import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomAvatar'
})
export class RandomAvatarPipe implements PipeTransform {

  transform(value: string): string {
    // return `http://avatar.3sd.me/40?name=${value}`;
    return `http://api.adorable.io/avatars/${value}`;
  }

}
