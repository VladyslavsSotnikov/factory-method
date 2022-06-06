import { Membership } from '../interface/Membership.interface';

export class GymPlusPoolMembership implements Membership {
  name: string = 'Gym + Pool membership';
  constructor(public price: number, public description: string) {}
}
