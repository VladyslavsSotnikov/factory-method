import { Membership } from '../interface/Membership.interface';

export class PersonalMembership implements Membership {
  name: string = 'Personal membership';
  constructor(public price: number, public description: string) {}
}
