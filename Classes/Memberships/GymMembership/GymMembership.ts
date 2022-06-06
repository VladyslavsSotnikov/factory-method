import { Membership } from '../interface/Membership.interface';

export class GymMembership implements Membership {
  name: string = 'Gym membership';
  constructor(public price: number, public description: string) {}
}
